const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    // apiKey: "AIzaSyC2OcV-A_Zbxni1p_J0zOQ",
    // authDomain: "dazzle-watch-mern.firebaseapp.com",
    // projectId: "dazzle-watch-mern",
    // storageBucket: "dazzle-watch-mern.appspot.com",
    // messagingSenderId: "710688480548",
    // appId: "1:710688480548:web:e5ee7b5fa21f05651d67b1"
};

export default firebaseConfig;