let lancer = document.getElementById('lancer'); //Variable bouton lancer

let travailMinutes = document.getElementById('minutes'); //Balise p contenant les minutes
let travailSecondes = document.getElementById('secondes') //Balise p contenant les secondes

let timerActif = false; //Afin de savoir si le timer est actif
let timerPauseDepart = false;

//Listener permettant de savoir si le bouton "lancer" est cliqué ou non
lancer.addEventListener('click', function () {
    let lancementTimer;
    if (timerActif == false) {
        lancementTimer = setInterval(timer, 1000);
    }
    else if (lancementTimer) {
        clearInterval(lancementTimer);
        lancementTimer = null;
        timerActif = false;
        travailMinutes.innerHTML = "25";
        travailSecondes.innerHTML = "00";
    }
    
})

function timer() {

    timerActif = true;
    let minutes = parseInt(travailMinutes.innerHTML); //On récupère les minutes
    let secondes = parseInt(travailSecondes.innerHTML); //On récupère les secondes

    if (timerPauseDepart == true) {
        travailMinutes.innerHTML = "0";
        travailSecondes.innerHTML = "05";
        timerPauseDepart = false;
    }

    if (minutes == 0 && secondes == 1) {
        travailSecondes.innerHTML = '0' + (secondes - 1);
        timerPauseDepart = true;
    }

    else if (secondes > 0) {
        if (secondes < 11) {
            travailSecondes.innerHTML = '0' + (secondes - 1);
        }
        else {
            travailSecondes.innerHTML = secondes - 1;
        }
    }
    else if (secondes == 0 && minutes > 0) {
        travailSecondes.innerHTML = 59;
        travailMinutes.innerHTML = minutes - 1;
    }
}