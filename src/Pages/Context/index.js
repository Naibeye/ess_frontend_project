import React, { createContext, useReducer , useEffect, useState} from "react";
import AppReducer from "./reducer";
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
  async function login(data) {
    try {
    
      
    } catch (e) {
    //console.log(e);
    return false
    }
  }
  async function retrieve() {
    try {
    const dataUser=await sessionStorage.getItem('dataUser')
    const isLogin=await sessionStorage.getItem('isLogin')
      dispatch({
        type: "RETRIEVE_TOKEN",
        payload: { isLogin: isLogin, dataUser: JSON.parse(dataUser)},
      });


    } catch (e) {
    //console.log(e);
    }

  }

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
