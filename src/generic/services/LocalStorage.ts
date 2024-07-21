
import { LOCAL_STORAGE_ACCESS_KEY } from "../constants";
import { ServerAuthResponse, UserServerResponse } from "../types";


export function saveUserLocal(user: UserServerResponse) {

    localStorage.setItem(LOCAL_STORAGE_ACCESS_KEY.USER, JSON.stringify(user))

}

export function retrieveUserLocal() {
    const result = localStorage.getItem(LOCAL_STORAGE_ACCESS_KEY.USER)
    if (result == null) return null

    try {
        const json = JSON.parse(result)
        return json

    } catch {

        return null
    }
}

export function saveUserAuth(user: ServerAuthResponse) {
    localStorage.setItem(LOCAL_STORAGE_ACCESS_KEY.ACCESS_TOKEN, JSON.stringify(user))
}

export function retrieveUserAuth(user: ServerAuthResponse) {
    const result = localStorage.getItem(LOCAL_STORAGE_ACCESS_KEY.ACCESS_TOKEN)
    if (result == null) return null
    try {
        const data = JSON.parse(result)
        return data
    } catch (error) {
        return null
    }
}