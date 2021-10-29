'use strict';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
// import { collection, addDoc, doc, setDoc} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-storage.js";
// import { firebase } from "https://www.gstatic.com/firebasejs/5.0.4/firebase.js"


//grab a form

const form_perbaikan = document.querySelector('.form_perbaikan');

//grab an input
const name = form_perbaikan.querySelector('#name');
const email = form_perbaikan.querySelector('#email');
const phone = form_perbaikan.querySelector('#phone');
const address = form_perbaikan.querySelector('#address');
const kendala = form_perbaikan.querySelector('#kendala');
const description = form_perbaikan.querySelector('#description');

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
var dateNow = new Date();

//create a functions to push
function firebasePushPerbaikan(name, email, phone, address, kendala, description) {

    db.collection("perbaikan").add({
        name: name.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        kendala: kendala.value,
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

    // try {
    //    const docRef = await addDoc(collection(db, "perbaikan"), {
            // name: name.value,
            // email: email.value,
            // phone: phone.value,
            // address: address.value,
            // kendala: kendala.value,
            // description: description.value,
            // bukti: "",
            // kunci: "",
    //     });
        // var refId = docRef.id;
    //     console.log("Document written with ID: ", refId);
    //     return refId;
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }

    // var perbaikanRef = firebase.database().ref('perbaikan').push().set(
    //     {
    //         name: name.value,
    //         email: email.value,
    //         phone: phone.value,
    //         address: address.value,
    //         kendala: kendala.value,
    //         description: description.value,
    //     }
    // )
}

function uploadImage(refId) {
    const ref = firebase.storage().ref();
    const file = document.querySelector('#files').files[0];
    const namaFoto = new Date() + '-' + file.name;
    const metadata = {
        contentType: file.type
    }

    const task = ref.child("perbaikan/"+namaFoto).put(file, metadata);

    task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => { console.log(url), saveImage(url, refId) });
    
}

function saveImage(url, refId){
    console.log(typeof url);
    db.collection("perbaikan").doc(refId).set({
        bukti: url,
        kunci: refId,
    }, { merge: true })
    .then((docRef) => {
        console.log("Document Updated");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
    // var key = "perba";
    // var perbaikanQuery = doc(db, "perbaikan/"+refId);
    // const query = {
        // bukti: url,
        // kunci: refId,
    // }
    // setDoc(perbaikanQuery, query, {merge: true});
    // var query = firebase.database().ref('perbaikan').once('value').then(function(snapshot) {
    //     snapshot.forEach(function(childSnapshot) {
    //             key = childSnapshot.key;
    //     });

    //     tambahBukti(url, key);

    // });

}

function tambahBukti(url, key){
    
    var perbaikanRef3 = firebase.database().ref('perbaikan').child(key).update(
        {
            bukti: url,
            kunci: key,
        }
    )

}

//push on form submit
if (form_perbaikan) {
    form_perbaikan.addEventListener('submit', function (evt1) {
        evt1.preventDefault();
        firebasePushPerbaikan(name, email, phone, address, kendala, description);
        return alert("Permintaan Anda telah terkirim. Tim kami akan segera menghubungi Anda lewat WA. Jika ingin informasi lebih cepat bisa langsung menghubungi WA kami. Terima Kasih.")
    })
}
