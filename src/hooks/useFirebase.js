import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
const [user, setUser] = useState([]);
const [authError, setAuthError] = useState('')
    const auth = getAuth();

    //Create user
    const newUserRegistration = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setAuthError(error.message)
            });
    }
    return {
        user,
        authError,
        newUserRegistration
    }

};

export default useFirebase;