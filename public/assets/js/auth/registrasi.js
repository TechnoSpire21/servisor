'use strict';

//grab a form
const form_registrasi = document.querySelector('.form_registrasi');

//grab an input
const name = form_registrasi.querySelector('#name');
const email = form_registrasi.querySelector('#email');
const pass = form_registrasi.querySelector('#pass');
const cpass = form_registrasi.querySelector('#cpass');
const phone = form_registrasi.querySelector('#phone');
const address = form_registrasi.querySelector('#address');

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


async function RegisterUser() {
    var emailUser = document.getElementById('email').value.toString();
    var passUser = document.getElementById('pass').value.toString();
    console.log(emailUser);
    console.log(passUser);

    firebase.auth().createUserWithEmailAndPassword(emailUser, passUser)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

    // try {
    //     const user1 = await auth.createUserWithEmailAndPassword(emailUser, passUser);
    //     // console.log(user1.user.uid);
    //     return user1.user.uid;
    // } catch (error) {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log(errorCode);
    //     console.log(errorMessage);
    // }



}

function firebasePush(name, email, pass, phone, address, pengguna) {
    //prevents from braking

    db.collection("users").doc(pengguna).set({
        name: name.value,
        email: email.value,
        pass: pass.value,
        phone: phone.value,
        address: address.value,
        uid: pengguna,
        isLogin: 0,
        createdAt: dateNow,
        updatedAt: dateNow 
    })
        .then((docRef) => {
            // const refId = docRef.id;
            console.log("User signed up with ID: ", pengguna);
            window.location.href = "login.html";
            return alert("Akun Anda telah terdaftar. Terima Kasih.")

        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            return alert("Ada masalah jaringan coba lagi klik daftar.")
        });

    // var perbaikanRef = firebase.database().ref('users').child(pengguna).set(
    //     {
    // name: name.value,
    // email: email.value,
    // pass: pass.value,
    // phone: phone.value,
    // address: address.value,
    // uid: pengguna,
    //     }
    // )
}



if (form_registrasi) {
    form_registrasi.addEventListener('submit', async function (evt1) {
        evt1.preventDefault();
        var emailUser = document.getElementById('email').value.toString();
        var passUser = document.getElementById('pass').value.toString();
        console.log(emailUser);
        console.log(passUser);
        const user1 = await firebase.auth().createUserWithEmailAndPassword(emailUser, passUser);
        const pengguna = user1.user.uid
        console.log(pengguna);
        firebasePush(name, email, pass, phone, address, pengguna);

    })
}
