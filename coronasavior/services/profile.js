import base from "./base";
import { AsyncStorage } from 'react-native';

export async function getProfile(){
    return await base.get("/profiles/");
}

export async function createProfile(address){
    const payload = {
        "address": address
    };
    return await base.post("/profiles/", payload);
}
