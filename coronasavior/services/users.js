import base from './base.js';

async function registerUser(username, first_name, last_name, email, password){
    const payload = {
        "username": username,
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password
    };
    return await base.post("/users/", payload);
}

async function getLoggedUser(){
    base.defaults.headers = {
        "Authorization": "Bearer " + "token"
    }
    return await base.post("/users/", payload);
}
