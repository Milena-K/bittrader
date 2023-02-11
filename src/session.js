import { getUserData } from "./firebaseConfig";
export const startSession = async (user) => {
    const data = await getUserData(user.uid);
    sessionStorage.setItem("user", JSON.stringify(data));
    sessionStorage.setItem("accessToken", user.accessToken);

}

export const getSession = () => {
    return {
        user: JSON.parse(sessionStorage.getItem("user")),
        accessToken: sessionStorage.getItem("accessToken"),
    }
}

export const endSession = () => {
    sessionStorage.clear();
}

export const isLoggedIn = () => {
    return getSession().accessToken;
}