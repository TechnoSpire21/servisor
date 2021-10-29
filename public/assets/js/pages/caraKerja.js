'use strict'

//grab element
const cara1 = document.getElementById('cara1');
const cara1sub = document.getElementById('cara1sub');
const cara2 = document.getElementById('cara2');
const cara2sub = document.getElementById('cara2sub');
const cara3 = document.getElementById('cara3');
const cara3sub = document.getElementById('cara3sub');
const cara4 = document.getElementById('cara4');
const cara4sub = document.getElementById('cara4sub');
const cara5 = document.getElementById('cara5');
const cara5sub = document.getElementById('cara5sub');

cara2.classList.add('hide');
cara2sub.classList.add('hide');
cara3.classList.add('hide');
cara3sub.classList.add('hide');
cara4.classList.add('hide');
cara4sub.classList.add('hide');
cara5.classList.add('hide');
cara5sub.classList.add('hide');

//grab image
var image1 = document.getElementById('image1');

cara1.onclick = function(){
    image1.src = 'assets/images/cara1.png';
    cara1.classList.remove('hide');
    cara1sub.classList.remove('hide');
    cara2.classList.add('hide');
    cara2sub.classList.add('hide');
    cara3.classList.add('hide');
    cara3sub.classList.add('hide');
    cara4.classList.add('hide');
    cara4sub.classList.add('hide');
    cara5.classList.add('hide');
    cara5sub.classList.add('hide');
};

cara2.onclick = function(){
    image1.src = 'assets/images/cara2.png';
    cara1.classList.add('hide');
    cara1sub.classList.add('hide');
    cara2.classList.remove('hide');
    cara2sub.classList.remove('hide');
    cara3.classList.add('hide');
    cara3sub.classList.add('hide');
    cara4.classList.add('hide');
    cara4sub.classList.add('hide');
    cara5.classList.add('hide');
    cara5sub.classList.add('hide');
};

cara3.onclick = function(){
    image1.src = 'assets/images/cara3.png';
    cara1.classList.add('hide');
    cara1sub.classList.add('hide');
    cara2.classList.add('hide');
    cara2sub.classList.add('hide');
    cara3.classList.remove('hide');
    cara3sub.classList.remove('hide');
    cara4.classList.add('hide');
    cara4sub.classList.add('hide');
    cara5.classList.add('hide');
    cara5sub.classList.add('hide');
}
cara4.onclick = function(){
    image1.src = 'assets/images/cara4.png';
    cara1.classList.add('hide');
    cara1sub.classList.add('hide');
    cara2.classList.add('hide');
    cara2sub.classList.add('hide');
    cara3.classList.add('hide');
    cara3sub.classList.add('hide');
    cara4.classList.remove('hide');
    cara4sub.classList.remove('hide');
    cara5.classList.add('hide');
    cara5sub.classList.add('hide');
}
cara5.onclick = function(){
    image1.src = 'assets/images/cara5.png';
    cara1.classList.add('hide');
    cara1sub.classList.add('hide');
    cara2.classList.add('hide');
    cara2sub.classList.add('hide');
    cara3.classList.add('hide');
    cara3sub.classList.add('hide');
    cara4.classList.add('hide');
    cara4sub.classList.add('hide');
    cara5.classList.remove('hide');
    cara5sub.classList.remove('hide');
}

// image2.style.display = "none";
// image3.style.display = "none";

// cara1.onclick = function(){
//     image1.style.display = "block";
//     image2.style.display = "none";
//     image3.style.display = "none";
// };

// cara2.onclick = function(){
//     image1.style.display = "none";
//     image2.style.display = "block";
//     image3.style.display = "none";
// };