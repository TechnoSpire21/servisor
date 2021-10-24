'use strict';

//grab a form
const form_login = document.querySelector('.my-login-validation');

//grab an input
const emailUser = form_login.querySelector('#email');
const passUser = form_login.querySelector('#password');

firebase.initializeApp({
    apiKey: "AIzaSyCOmlwNh81n3nw5S5NmoK2-vTegWLtWNVg",
    authDomain: "servisor-fa4bf.firebaseapp.com",
    databaseURL: "https://servisor-fa4bf-default-rtdb.firebaseio.com",
    projectId: "servisor-fa4bf",
    storageBucket: "servisor-fa4bf.appspot.com",
    messagingSenderId: "722678778553",
    appId: "1:722678778553:web:4fd79994047389fb702968",
    measurementId: "G-4W2316QSJ1"
});

var db = firebase.firestore();
var storage = firebase.storage();
var auth = firebase.auth();
var dateNow = new Date();

function login(emailLogin, passLogin) {
    firebase.auth().signInWithEmailAndPassword(emailLogin, passLogin)
        .then((userCredential) => {
            // Signed in
            var userId = userCredential.user;
            firebaseLogin(userId)
            
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
            return alert("Username atau password salah.");
        });
}

function firebaseLogin(userId) {
    console.log(userId.uid);
    db.collection("users").doc(userId.uid).set({
        isLogin: 1,
        updatedAt: dateNow 
    }, { merge: true })
        .then((docRef) => {
            // const refId = docRef.id;
            console.log("User", userId.uid, "logged on");
            window.location.replace("../index.html");
            return alert("Berhasil Login");

        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            return alert("Ada masalah jaringan coba Login ulang.");
        });
}

if (form_login) {
    form_login.addEventListener('submit', async function (evt1) {
        evt1.preventDefault();
        var emailLogin = emailUser.value;
        var passLogin = passUser.value;
        console.log(emailLogin);
        console.log(passLogin);
        login(emailLogin, passLogin);
    })
}