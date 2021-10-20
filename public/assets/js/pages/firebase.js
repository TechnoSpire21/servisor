'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#inputEmail');

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


//push on form submit
if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputEmail);
        return alert('Your email has been successfully registered');
    })
}
