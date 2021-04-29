'use strict';

//grab a form
const form = document.querySelector('.form-inline');
const form_perbaikan = document.querySelector('.form-perbaikan');

//grab an input
const inputEmail = form.querySelector('#inputEmail');

//input for perbaikan
const name = form.querySelector('#name');
const email1 = form.querySelector('#email1');
const nomor = form.querySelector('#nomor');
const alamat = form.querySelector('#alamat');
const kendala = form.querySelector('#kendala');
const description = form.querySelector('#description');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


//create a functions to push
function firebasePush(input) {


    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    //push itself
    var mailsRef = firebase.database().ref('emails').push().set(
        {
            mail: input.value
        }
    );

}

function firebasePushPerbaikan(name, email1, nomor, alamat, kendala, description){
    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    var perbaikanRef = firebase.database().ref('perbaikan').push().set(
        {
            nama: name.value,
            email: email1.value,
            telepon: nomor.value,
            alamat: alamat.value,
            kendala: kendala.value,
            description: description.value,
        }
    )
}

//push on form submit
if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputEmail);
        return alert('Your email has been successfully registered');
    })
}

if (form_perbaikan){
    form_perbaikan.addEventListener('submit', function(evt1){
        evt1.preventDefault();
        firebasePushPerbaikan(name, email1, nomor, alamat, kendala, description);
        return alert("Permintaan Anda telah terkirim. Terima Kasih.")
    })
}