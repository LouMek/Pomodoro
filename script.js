let lancer = document.getElementById('lancer'); //Variable bouton lancer

let travailMinutes = document.getElementById('minutes'); //Balise p contenant les minutes
let travailSecondes = document.getElementById('secondes'); //Balise p contenant les secondes

let etatEnCours = document.getElementById('etat'); //On récupère l'élément d'ID 'travail' 

let timerActif = false; //Afin de savoir si le timer est actif
let timerEnPause = false;
let lancementTimer = null;


let cercle = document.querySelector('.cercle');


//Listener permettant de savoir si le bouton "lancer" est cliqué ou non
lancer.addEventListener('click', function () {
    if (lancementTimer == null) {
        document.body.classList.remove('enPause');
        etatEnCours.innerHTML = "Travail en cours";
        lancementTimer = setInterval(timer, 1000); //lance la fonction timer avec un interval de 1 seconde
    }
    else if (timerActif == true) {
        clearInterval(lancementTimer); //permet d'arreter le timer 
        lancementTimer = null;
        timerActif = false;
        etatEnCours.innerHTML = "Lancer le timer";
        travailMinutes.innerHTML = "25"; //remet le timer à 25minutes
        travailSecondes.innerHTML = "00";


        document.body.classList.remove('enPause');
        document.body.classList.remove('versLeTravail');
        document.body.classList.remove('versLaPause');

        cercle.body.classList.remove('enPause');
        cercle.body.classList.remove('versLeTravail');
        cercle.body.classList.remove('versLaPause');
    }

})

function timer() {

    timerActif = true;
    let minutes = parseInt(travailMinutes.innerHTML); //On récupère les minutes
    let secondes = parseInt(travailSecondes.innerHTML); //On récupère les secondes

    // if (timerPauseDepart == true) {
    //     timerPauseDepart == false;
    // }

    if (minutes == 0 && secondes == 0) {
        if (timerEnPause == false) {
            etatEnCours.innerHTML = "Pause en cours";

            travailMinutes.innerHTML = "00";
            travailSecondes.innerHTML = "18";
            timerEnPause = true;

            cercle.classList.add('enPause');
            document.body.classList.add('enPause');

            cercle.classList.remove('versLaPause');
            document.body.classList.remove('versLaPause');
        }
        else {
            etatEnCours.innerHTML = "Travail en cours";

            travailMinutes.innerHTML = "00";
            travailSecondes.innerHTML = "18";
            timerEnPause = false;

            cercle.classList.remove('enPause');
            document.body.classList.remove('enPause');

            cercle.body.classList.remove('versLeTravail');
            document.body.classList.remove('versLeTravail');
        }
    }

    else if (secondes == 0 && minutes > 0) {
        travailSecondes.innerHTML = '59';
        if (minutes < 11) {
            travailMinutes.innerHTML = '0' + (minutes - 1);
        }
        else {
            travailMinutes.innerHTML = '' + (minutes - 1);
        }

    }

    else if (secondes > 0) {
        if (secondes < 11) {
            travailSecondes.innerHTML = '0' + (secondes - 1);
        }
        else {
            travailSecondes.innerHTML = '' + (secondes - 1);
        }
    }

    if (secondes == 10 && minutes == 0 && etatEnCours.innerHTML == "Travail en cours") {
        document.body.classList.add('versLaPause');
        cercle.classList.add('versLaPause');
    }

    if (secondes == 10 && minutes == 0 && etatEnCours.innerHTML == "Pause en cours") {
        document.body.classList.add('versLeTravail');
        cercle.classList.add('versLeTravail');
    }


}