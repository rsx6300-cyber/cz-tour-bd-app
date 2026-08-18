import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCuX4CXVX6pauKvJrafDaOrlwEyHYcd3fA",
    authDomain: "cz-tour-bd.firebaseapp.com",
    projectId: "cz-tour-bd",
    storageBucket: "cz-tour-bd.firebasestorage.app",
    messagingSenderId: "838670408727",
    appId: "1:838670408727:web:2f5c7829254c57b4939052"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };