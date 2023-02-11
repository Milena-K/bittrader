import {createContext, useMemo, useState} from "react";

export const SignInContext = createContext({openSignIn: false, setOpenSignIn: null});

const SignInContextProvider = ({children}) => {
    const [openSignIn, setOpenSignIn] = useState(false);
    // const value = useMemo(() => ({ openSignIn, setOpenSignIn}), [openSignIn, setOpenSignIn]);
    return (
        <SignInContext.Provider value={{ openSignIn, setOpenSignIn}}>
            {children}
        </SignInContext.Provider>
    )
}

export default SignInContextProvider;
