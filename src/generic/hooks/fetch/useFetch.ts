
import { retrieveUserAuth } from '@/generic/services/LocalStorage';
import { useState, useEffect } from 'react';

interface FetchOptions extends RequestInit {
    token?: string; 
}

interface FetchResponse<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

const useFetch = <T>(url: string, options: FetchOptions = {}): FetchResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    
    
    const fetchData = async () => {
        let {accessToken, refreshToken: refleshTokenString} = retrieveUserAuth();

        const headers = new Headers(options.headers || {});
        if (accessToken) {
            headers.append('Authorization', `Bearer ${accessToken}`);
        }

        try {
            const response = await fetch(url, {
                ...options,
                headers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
        } catch (error: any) {
            setError(error.message);
            setLoading(false)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, options]);

    return { data, error, loading };
};


export default useFetch;
