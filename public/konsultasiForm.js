'use strict';

//grab a form
const form_konsultasi = document.querySelector('.form_konsultasi');

//grab an input
const name = form_konsultasi.querySelector('#name');
const email = form_konsultasi.querySelector('#email');
const phone = form_konsultasi.querySelector('#phone');
const address = form_konsultasi.querySelector('#address');
const konsultasi = form_konsultasi.querySelector('#konsultasi');
const description = form_konsultasi.querySelector('#description');

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
function firebasePushKonsultasi(name, email, phone, address, konsultasi, description){
    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    var konsultasiRef = firebase.database().ref('konsultasi').push().set(
        {
            name: name.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            konsultasi: konsultasi.value,
            description: description.value,
        }
    )
}

function uploadImage() {
    const ref = firebase.storage().ref()
    const file = document.querySelector('#files').files[0];
    const namaFoto = new Date() + '-' + file.name
    const metadata = {
        contentType: file.type
    }

    const task = ref.child(namaFoto).put(file, metadata)

    task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => { console.log(url), saveImage(url) })
}

function saveImage(url){
    var perbaikanRef2 = firebase.database().ref('konsultasi').push().update(
        {
            bukti: url,
        }
    )
}

//push on form submit
if (form_konsultasi){
    form_konsultasi.addEventListener('submit', function(evt1){
        evt1.preventDefault();
        firebasePushKonsultasi(name, email, phone, address, konsultasi, description);
        return alert("Permintaan Anda telah terkirim. Terima Kasih.")
    })
}

