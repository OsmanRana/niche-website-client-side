import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    //Create user
    const newUserRegistration = (email, password, name, location, history) => {
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
                saveUser(email, name, 'POST');
                const destination = location?.state?.from || '/'
                history.replace(destination)
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //Login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //Google Sign In
    const handleGoogleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setAuthError('');
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/'
                history.replace(destination)
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

    //check admin
    useEffect(() => {
        fetch(`https://mighty-bastion-98054.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user?.email])

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

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://mighty-bastion-98054.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })
    };


    return {
        user,
        admin,
        authError,
        isLoading,
        newUserRegistration,
        loginUser,
        handleGoogleSignIn,
        logOut
    }

};

export default useFirebase;