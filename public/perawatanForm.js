'use strict';

//grab a form
const form_perawatan = document.querySelector('.form_perawatan');

//grab an input
const name = form_perawatan.querySelector('#name');
const email = form_perawatan.querySelector('#email');
const phone = form_perawatan.querySelector('#phone');
const address = form_perawatan.querySelector('#address');
const perawatan = form_perawatan.querySelector('#perawatan');
const description = form_perawatan.querySelector('#description');

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
function firebasePushPerbaikan(name, email, phone, address, perawatan, description){
    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    var perawatanRef = firebase.database().ref('perawatan').push().set(
        {
            name: name.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            perawatan: perawatan.value,
            description: description.value,
        }
    )
}

//push on form submit
if (form_perawatan){
    form_perawatan.addEventListener('submit', function(evt1){
        evt1.preventDefault();
        firebasePushPerbaikan(name, email, phone, address, perawatan, description);
        return alert("Permintaan Anda telah terkirim. Terima Kasih.")
    })
}
