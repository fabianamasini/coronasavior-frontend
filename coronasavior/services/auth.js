import base, { internal } from "./base";

export async function getAuthorizationToken(username, password){
    const payload = {
        "username": username,
        "password": password
    };
    return await internal.post("/api/token/", payload);
}

export async function refreshToken(){
    const payload = {
        "refresh": refresh
    };
    return await base.post("/api/token/refresh/", payload);
}
