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
const analytics = firebase.analytics();
firebase.analytics().logEvent('notification_received');
var dateNow = new Date();

//create a functions to push
function firebasePushPerawatan(name, email, phone, address, perawatan, description){
    //prevents from braking

    db.collection("perawatan").add({
        name: name.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        jenis: perawatan.value,
        description: description.value,
        bukti: "",
        kunci: "",
        createdAt: dateNow,
        updatedAt: dateNow
    })
    .then((docRef) => {
        const refId = docRef.id;
        console.log("Document written with ID: ", refId);
        uploadImage(refId);
        
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

function uploadImage(refId) {
    const ref = firebase.storage().ref();
    const file = document.querySelector('#files').files[0];
    const namaFoto = new Date() + '-' + file.name;
    const metadata = {
        contentType: file.type
    }

    const task = ref.child("perawatan/"+namaFoto).put(file, metadata);

    task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => { console.log(url), saveImage(url, refId) });
}

function saveImage(url, refId){

    console.log(typeof url);
    db.collection("perawatan").doc(refId).set({
        bukti: url,
        kunci: refId,
    }, { merge: true })
    .then((docRef) => {
        console.log("Document Updated");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

}

//push on form submit
if (form_perawatan){
    form_perawatan.addEventListener('submit', function(evt1){
        evt1.preventDefault();
        firebasePushPerawatan(name, email, phone, address, perawatan, description);
        return alert("Permintaan Anda telah terkirim. Tim kami akan segera menghubungi Anda lewat WA. Jika ingin informasi lebih cepat bisa langsung menghubungi WA kami. Terima Kasih.")
    })
}

