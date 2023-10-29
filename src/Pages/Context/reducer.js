export default (state, action) => {
    switch (action.type) {
        case "LOGIN":
        return {
          ...state,
          dataUser: action.payload.dataUser,
          isLogin: action.payload.isLogin,
        };
        case "RETRIEVE_TOKEN":
        return {
          ...state,
          dataUser: action.payload.dataUser,
          isLogin: action.payload.isLogin,
  
        };
        case "LOGOUT":
        return {
        };
      default:
        return state;
    }
  };