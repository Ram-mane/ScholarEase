import { myAxios } from "./helper";

export const signUp=(user)=>{
    return myAxios
    .post('/api/auth/register',user);
    
};

export const doLogIn=(details)=>{
    return myAxios
    .post('/api/auth/login',details);
    
};