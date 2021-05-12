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

const config = {
    apiKey: "AIzaSyCOmlwNh81n3nw5S5NmoK2-vTegWLtWNVg",
    authDomain: "servisor-fa4bf.firebaseapp.com",
    databaseURL: "https://servisor-fa4bf-default-rtdb.firebaseio.com",
    projectId: "servisor-fa4bf",
    storageBucket: "servisor-fa4bf.appspot.com",
    messagingSenderId: "722678778553",
    appId: "1:722678778553:web:4fd79994047389fb702968",
    measurementId: "G-4W2316QSJ1"
};

firebase.initializeApp(config);

function RegisterUser() {
    var emailUser = document.getElementById('email').value;
    var passUser = document.getElementById('pass').value;
    firebase.auth().createUserWithEmailAndPassword(emailUser, passUser).then((userCredential) => {
        
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
    
}

function firebasePush(name, email, pass, phone, address,) {
    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    var perbaikanRef = firebase.database().ref('users').push().set(
        {
            name: name.value,
            email: email.value,
            pass: pass.value,
            phone: phone.value,
            address: address.value,
            // uid: user1.value,
        }
    )
}



if (form_registrasi) {
    form_registrasi.addEventListener('submit', function (evt1) {
        evt1.preventDefault();
        RegisterUser();
        firebasePush(name, email, pass, phone, address);
        return alert("Akun Anda telah terdaftar. Terima Kasih.")
    })
}
