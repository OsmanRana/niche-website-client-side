import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    //Create user
    const newUserRegistration = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name };
                setUser(newUser)
                //send name to the firebase
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //Login user
    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //Google Sign In
    const handleGoogleSignIn = (history) => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                setAuthError('');
                history.replace('/');
            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => setIsLoading(false));
    }

    //User State change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth])

    //Logout User
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser('')
        })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    return {
        user,
        authError,
        isLoading,
        newUserRegistration,
        loginUser,
        handleGoogleSignIn,
        logOut
    }

};

export default useFirebase;