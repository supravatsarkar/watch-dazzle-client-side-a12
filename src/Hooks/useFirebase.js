import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import firebaseAuthentication from '../Pages/Login/Firebase/Firebase.init';

firebaseAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const register = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
                // ..
            })
            .finally(() => setLoading(false));
    }

    const login = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // alert('login success');
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        setLoading(false)
    }, [])


    const logout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }


    return {
        register,
        login,
        logout,
        user,
        error,
        loading
    };
};

export default useFirebase;