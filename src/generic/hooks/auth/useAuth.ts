import { ENDPOINTS } from "@/generic/constants";
import { saveUserLocal } from "@/generic/services/LocalStorage";
import { ServerResponseError, UserLogin, UserServerResponse, UserSignUp } from "@/generic/types";
import { getServerUrl } from "@/generic/utils";
import HttpStatusCode from "@/generic/utils/HttpStatusCode";
import { useState } from "react";





function useAuth() {

    const [error, setError] = useState<ServerResponseError | null>(null)

    const [user, setUser] = useState<UserServerResponse | null>(null)

    const [loading, setLoading] = useState(false)


    const signIn = async (user: UserLogin) => {


    }


    const signUp = async (user: UserSignUp): Promise<UserServerResponse | ServerResponseError> => {
        const url = getServerUrl(ENDPOINTS.SIGN_UP)
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
            setError(null)
            setLoading(true)
            const response = await fetch(url, requestOptions)
            const json = await response.json()
            setLoading(false)

            if (response.status === HttpStatusCode.BAD_REQUEST) {
                setError(json)
            }

            if (response.status === HttpStatusCode.CONFLICT) {
                setError(json)
            }


            if (response.status === HttpStatusCode.CREATED) {
                saveUserLocal(json)
                setUser(json)
            }
            return json

        } catch (error) {
            const internalServerError = {
                error: "Internal Server Error", message: ["Something went wrong. Check your internet and try again."],
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR
            }

            setError(internalServerError)
            setLoading(false)
            return internalServerError
        }








    }

    return { user, error, loading, signUp }
}



export default useAuth