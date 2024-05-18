import AuthService from "../services/auth.service";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGSTER_FAIL, REGSTER_SUCCESS, SET_MESSAGE } from "./types";

export const register = (id,name,username,password,number) => (dispatch) => {
    return (AuthService.register(id,name,username,password,number)).then((response)=>{
        dispatch({
            type : REGSTER_SUCCESS
        });
        dispatch({
            type : SET_MESSAGE,
            payload : response.data.message
        });
        return Promise.resolve();
    },
    (error) => {
        const message = (
            error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            dispatch({
                type: REGSTER_FAIL
                });
            dispatch({
                type: SET_MESSAGE,
                payload: message
            });
            return Promise.reject();
        }
    );
};

export const login = (username,password) => (dispatch) => {
    return (AuthService.login(username,password).then((response)=>{
        dispatch({
            type:LOGIN_SUCCESS,
        });
        dispatch({
            type:SET_MESSAGE,
            payload:{user:response.data}
        });
        return Promise.resolve();
    },
    (error) =>{
        const message = (error.response && error.response.data && error.response.message.data) || error.message || error.toString();
        dispatch({
            type: LOGIN_FAIL
        });
        dispatch({
            type: SET_MESSAGE,
            payload:message
        });
        return Promise.reject();
    }
));
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT
    });
};