import { createContext ,useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE={
    user:{
        _id:"63b40dc9a544ab7caf24ec0f",
        username:"john",
        email:"john@gmail.com",
        profilePicutre:"perons/1.jpeg",
        coverPicture:"",
        isAdmin:false,
        followers:[],
        following:[]
    },
    isFetching:false,
    error:false
};

export const AuthContext=createContext(INITIAL_STATE);

export const AuthContextProvider=({children})=>{
    const [state,dispatch]= useReducer(AuthReducer,INITIAL_STATE);
    return(
        <AuthContext.Provider
        value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};