import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router';
import {AuthProvider} from "./AuthContext";
import Home from './Home';
import Profile from './Profile';
import Trading from './Trading';
import AboutUs from './AboutUs';
import {useContext, useEffect, useMemo} from "react";
import {onAuthStateChanged} from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore';
import {db, auth} from './firebaseConfig';
import {useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import ContextRegisterProvider from "./ContextRegister";
import SignInContextProvider from "./SignInContext";
import {getSession, isLoggedIn, startSession} from "./session";
import TermsOfUse from "./TermsOfUse";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, loading, error] = useAuthState(auth);

    const getUserData = async (currentUser) => {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists())
            return docSnap.data();
        else console.log("nothing.")
    }
    useEffect(() => {
        if(!currentUser) {
            const session = getSession();
            setCurrentUser(session.user);
        }
    }, [])
    // useEffect(() => {
    //     if (loading) return;
    //
    //     onAuthStateChanged(auth, (newUser) => {
    //         getUserData(newUser).then((data) => {
    //             setCurrentUser(data);
    //         });
    //     })
    // }, []);

    return (
        <div className="App">
            <AuthProvider value={{currentUser, setCurrentUser}}>
                <ContextRegisterProvider>
                    <SignInContextProvider>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/trading' element={<Trading/>}/>
                            <Route path='/about-us' element={<AboutUs/>}/>
                            <Route path='/tos' element={<TermsOfUse/>}/>
                        </Routes>
                    </SignInContextProvider>
                </ContextRegisterProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
