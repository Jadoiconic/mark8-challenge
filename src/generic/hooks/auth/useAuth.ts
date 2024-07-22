import { ENDPOINTS, LOCAL_STORAGE_ACCESS_KEY } from "@/generic/constants";
import { saveUserAuth, saveUserLocal } from "@/generic/services/LocalStorage";
import { RefleshtToken, ServerResponseError, UserLogin, UserServerResponse, UserSignUp } from "@/generic/types";
import { getServerUrl } from "@/generic/utils";
import HttpStatusCode from "@/generic/utils/HttpStatusCode";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const isLoggedIn = () => {
    return localStorage.getItem(LOCAL_STORAGE_ACCESS_KEY.ACCESS_TOKEN);
};

function useAuth() {
    const [error, setError] = useState<ServerResponseError | null>(null);
    const [user, setUser] = useState<UserServerResponse | null>(null);
    const [loading, setLoading] = useState(false);
    
    const router = useRouter();
    const pathname = usePathname();
    const allowedRoutes = ['/auth/login', '/auth/signup'];
    
    const logout = () => {
        localStorage.removeItem(LOCAL_STORAGE_ACCESS_KEY.ACCESS_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_ACCESS_KEY.USER);
        setUser(null);
        router.push('/auth/login');
    };

    useEffect(() => {
        setLoading(true);
        if (isLoggedIn()) {
            setUser({} as UserServerResponse);
            setLoading(false);
            if (allowedRoutes.includes(pathname)) {
                router.push("/");
            }
        } else {
            if (!allowedRoutes.includes(pathname)) {
                router.push("/auth/login");
            }
            setLoading(false);
        }
    }, [router, pathname]);

    const refreshToken = async (token: RefleshtToken) => {
        const url = getServerUrl(ENDPOINTS.REFLESH_TOKEN);
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("refresh-token", token.toString());

        const options = {
            method: 'GET',
            headers,
        };

        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url, options);
            if (!response.ok) {
                const fetchError = {
                    error: "Server Error",
                    message: ["Refresh token request failed"],
                    statusCode: response.status
                };
                setError(fetchError);
                setLoading(false);
                return fetchError;
            }
            const data = await response.json();
            setLoading(false);
            return data;
        } catch (error) {
            const internalServerError = {
                error: "Internal Server Error",
                message: ["Something went wrong. Check your internet and try again."],
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR
            };
            setError(internalServerError);
            setLoading(false);
            return internalServerError;
        }
    };

    const signIn = async (user: UserLogin) => {
        const url = getServerUrl(ENDPOINTS.SIGN_IN);
        const body = JSON.stringify(user);
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions: RequestInit = {
            method: "POST",
            body,
            redirect: "follow",
            headers
        };

        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url, requestOptions);
            const json = await response.json();
            saveUserAuth(json.data);
            setLoading(false);
            return json.data;
        } catch (error) {
            const internalServerError = {
                error: "Internal Server Error",
                message: ["Something went wrong. Check your internet and try again."],
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR
            };
            setError(internalServerError);
            setLoading(false);
            return internalServerError;
        }
    };

    const signUp = async (user: UserSignUp): Promise<UserServerResponse | ServerResponseError> => {
        const url = getServerUrl(ENDPOINTS.SIGN_UP);
        const body = JSON.stringify(user);
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const requestOptions: RequestInit = {
            method: "POST",
            body,
            redirect: "follow",
            headers
        };

        try {
            setError(null);
            setLoading(true);
            const response = await fetch(url, requestOptions);
            const json = await response.json();
            setLoading(false);

            if (response.status === HttpStatusCode.BAD_REQUEST || response.status === HttpStatusCode.CONFLICT) {
                setError(json);
                return json;
            }

            if (response.status === HttpStatusCode.CREATED) {
                saveUserLocal(json);
                setUser(json);
            }
            return json;
        } catch (error) {
            const internalServerError = {
                error: "Internal Server Error",
                message: ["Something went wrong. Check your internet and try again."],
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR
            };
            setError(internalServerError);
            setLoading(false);
            return internalServerError;
        }
    };

    return { user, error, loading, signUp, signIn, refreshToken, logout };
}

export default useAuth;
