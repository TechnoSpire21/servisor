'use strict';

//grab a form
const form_login = document.querySelector('.my-login-validation');

//grab an input
const email = form_login.querySelector('#email');
const pass = form_login.querySelector('#password');

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

function firebasePush(user) {
    var perbaikanRef = firebase.database().ref('users').where().push().set(
        {
            name: name.value,
            email: email.value,
            pass: pass.value,
            phone: phone.value,
            address: address.value,
            uid: pengguna,
            
        }
    )
}

if (form_login) {
    form_login.addEventListener('submit', async function (evt1) {
        evt1.preventDefault();
        console.log(email.value);
        console.log(pass.value);
        firebase.initializeApp(config);
        const user1 = await firebase.auth().signInWithEmailAndPassword(email.value, pass.value).then((userCredential) => {
            // Signed in
            var user = userCredential.user.uid;
            console.log(user);
            firebasePush(user);
            // ...
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            return alert("Gagal Login");
        });;
        
        // window.location.replace("index.html");
        return alert("Berhasil Login");

    })
}