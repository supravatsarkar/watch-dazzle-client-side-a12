import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import firebaseAuthentication from '../Pages/Login/Firebase/Firebase.init';

firebaseAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [saveUser, setSaveUser] = useState({});

    const register = (email, password, name, history) => {
        const userInfo = { email, displayName: name };
        // setSaveUser(userInfo);
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // update name 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    console.log('from register-', userInfo);
                }).catch((error) => {
                    setError(error.message);
                });
                saveUserDb(userInfo);
                setError('');
                history.push('/');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const login = (email, password, history, location) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError('');
                const redirect_url = location?.state?.from || '/';
                history.push(redirect_url);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // observer user auth 
    useEffect(() => {
        setLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setLoading(false);
        });
        console.log('execute useEffect--');
        return () => unsubscribed;

    }, []);

    // console.log(error);
    const logout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    const saveUserDb = (userInfo) => {
        console.log('run saveUserDb func', userInfo);
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }).then(res => res.json())
            .then(data => console.log(data));
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