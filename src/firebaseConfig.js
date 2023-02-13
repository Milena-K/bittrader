import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signOut,} from "firebase/auth";
import {query, getDoc, where, getFirestore, doc, setDoc, collection} from 'firebase/firestore';
import {getDatabase, set, ref} from 'firebase/database';
import jsonFile from './convertcsv.json';

export const firebaseConfig = {
    apiKey: "AIzaSyBoPmENYeoqHtt3Rnibs6rCyheZ1c4h8nw",
    authDomain: "bittrading-35cc4.firebaseapp.com",
    projectId: "bittrading-35cc4",
    storageBucket: "bittrading-35cc4.appspot.com",
    messagingSenderId: "1085390372584",
    appId: "1:1085390372584:web:c8cec2bdd3bf2d2cdad35d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerWithEmailAndPassword = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        'bch_wallet': '',
        'eth_wallet': '',
        'btc_wallet': '',
        'bch_balance': '0',
        'eth_balance': '0',
        'btc_balance': '0',
        email,
        'username': email.split("@")[0],
    }).catch(error => {
        throw error;
    });
};

export const getUserData = async (uid) => {
    try {
        // const q = query(collection(db, "users"), where("uid", "==", uid));
        const snapshot = await getDoc(doc(db, "users", uid))
        const data = snapshot.data();
        return data;
    } catch (err) {
        console.error(err);
    }
}

const logout = () => {
    signOut(auth);
}

export {
    auth,
    db,
    registerWithEmailAndPassword,
    logout,
}