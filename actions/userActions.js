import * as actionTypes from "../ActionTypes";
import axios from "axios";
//npm i axios

export const LoginInit = (loginCred)=>{
    return (dispatch)=>{
        console.log(loginCred)
        const requestURL = "/";
        axios.get(requestURL, loginCred)
        .then((res)=>{
            localStorage.setItem("Username", "")
            localStorage.setItem("email", "")
            localStorage.setItem("role", "")
            localStorage.setItem("token", "")
        })
        .catch((err)=>{})
    }
}

export const signupInit = (signupCred)=>{
    return (dispatch)=>{
        console.log(signupCred)
        const requestURL = "/";
        axios.get(requestURL, signupCred)
        .then((res)=>{
            localStorage.setItem("Username", "")
            localStorage.setItem("email", "")
            localStorage.setItem("role", "")
            localStorage.setItem("token", "")
        })
        .catch((err)=>{})
    }
}


export const logout = ()=>{
    return (dispatch)=>{
        const requestURL = "/";
        axios.get(requestURL)
        .then((res)=>{
            console.log(res)
            localStorage.removeItem("Username")
            localStorage.removeItem("email")
            localStorage.removeItem("role")
            localStorage.removeItem("token")
            dispatch({
                type : actionTypes.LOGOUT_SUCCESS
            })

        })
        .catch((err)=>{
            console.log(err)
            dispatch({
                type : actionTypes.LOGOUT_FAILED
            })
        })      
    }
}

