import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./reducer";
import { users } from "../data";
const initialState = {
    dataUser: {},
    isLogin: false,
}
const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = React.useState(
        sessionStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        sessionStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [isLogin, setIsLogin] = useStateWithLocalStorage("isLogin");
    const [dataUser, setDataUser] = useStateWithLocalStorage("dataUser");
     /**
      * Logs in a user with the provided data.
      * @param {object} data - The user login data, including email and password.
      * @returns {boolean} - Returns true if the login is successful, false otherwise.
      */
     function login(data) {
        try {
            const existedUser=users.find(item=>item.email===data?.email && item.password===data?.password)
            console.log(existedUser)
            if (existedUser){
                setIsLogin(true)
                setDataUser(JSON.stringify({...existedUser }))
                dispatch({
                type: "LOGIN",
                payload: {
                    isLogin: true,
                    dataUser:existedUser
                }
            });
            }
            return true

        } catch (e) {
            //console.log(e);
            return false
        }
    }
    /**
     * Retrieves the user data from the session storage and dispatches an action to update the token.
     * @returns None
     */
    async function retrieve() {
        try {
            const dataUser = await sessionStorage.getItem('dataUser')
            const isLogin = await sessionStorage.getItem('isLogin')
            dispatch({
                type: "RETRIEVE_TOKEN",
                payload: { isLogin: isLogin, dataUser: JSON.parse(dataUser) },
            });


        } catch (e) {
            //console.log(e);
        }

    }

    /**
     * Logs out the user by clearing the session storage and dispatching a "LOGOUT" action.
     * @returns None
     */
    async function logout() {
        sessionStorage.clear()
        dispatch({
            type: "LOGOUT",
        });

    }

    return (
        <GlobalContext.Provider
            value={{
                ...state,
                login,
                retrieve,
                logout,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
