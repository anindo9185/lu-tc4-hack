// --------------------------------Hadeling Firebase----------------------------------//
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAxzX4sBmzREWTUizcb5p6DAibIi2djfWU",
    authDomain: "net-ninja-firebase-7e164.firebaseapp.com",
    projectId: "net-ninja-firebase-7e164",
    storageBucket: "net-ninja-firebase-7e164.appspot.com",
    messagingSenderId: "559767507773",
    appId: "1:559767507773:web:9b8cb4a842fd1a4d6eeb54",
    measurementId: "G-QC7Z205B2K"
};


//   init app
initializeApp(firebaseConfig);

// init service
const auth = getAuth();




//sign-up
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();


    // get user info
    let email = document.querySelector("#signup-email").value;
    let password = document.querySelector("#signup-password").value;
    let confirmPassword = document.querySelector('#confirm-password').value;

    if (password != confirmPassword) {
        console.log("Password did not match");
    } else {

        createUserWithEmailAndPassword(auth, email, password).then(cred => {
            console.log(cred.user);
        }).catch(err => {
            console.log(err.message);
        });
    }

    email = "";
    password = "";
    confirmPassword = "";

})





// -----------------------------------------------------------------------------------------------------------//
// Manupulating DOM