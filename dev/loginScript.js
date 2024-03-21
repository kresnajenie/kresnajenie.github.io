// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-_Xe8b_B0FTuGrjdpQ6ADkskdBdVrnww",
    authDomain: "fishies-1da2f.firebaseapp.com",
    projectId: "fishies-1da2f",
    storageBucket: "fishies-1da2f.appspot.com",
    messagingSenderId: "603040508297",
    appId: "1:603040508297:web:2c3b40d314a2db43a15958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const loginButton = document.getElementById("loginButton");
const signOutButton = document.getElementById("signOutButton");
const message = document.getElementById("message");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

signOutButton.style.display = "none";
message.style.display = "none";

const userSignIn = async () => {
    signInWithPopup(auth, provider)
    .then(async (res) => {
        const user = res.user;
        console.log(user);

        loginButton.style.display = "none";

        signOutButton.style.display = "block";
        message.style.display = "block";
        userName.innerHTML = user.displayName;
        userEmail.innerHTML = user.email;

        await addDoc(collection(db, "users"), {
            displayName: user.displayName,
            email: user.email,
        })
    })
    .catch((err) => {
        console.log(err.message);
    })
}

const userSignOut = async () => {
    signOut(auth)
    .then(() => {
        alert("Signed out");

        loginButton.style.display = "block";

        signOutButton.style.display = "none";
        message.style.display = "none";
    })
    .catch((err) => {})
}

// always checks if authentication state changed
// onAuthStateChanged(auth, (user) => {
//     if (user) {
    
//     } else {
//     loginButton.style.display = "block";

//     signOutButton.style.display = "none";
//     message.style.display = "none";
//     }
// });

loginButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);