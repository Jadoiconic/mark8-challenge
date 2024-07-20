import { LOCAL_STORAGE_ACCESS_KEY } from "../constants";
import { UserServerResponse } from "../types";



export function saveUserLocal(user:UserServerResponse){

localStorage.setItem(LOCAL_STORAGE_ACCESS_KEY.USER,JSON.stringify(user))

}

export function retrieveUserLocal(){


   const result =  localStorage.getItem(LOCAL_STORAGE_ACCESS_KEY.USER)

   if(result == null)return null


    try {

      const json =   JSON.parse(result)

      return json

    }catch{


        return null


    }


}



