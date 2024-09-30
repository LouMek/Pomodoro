let lancer = document.getElementById('lancer'); //Variable bouton lancer
let configurer = document.getElementById('configurer'); //Variable bouton configurer
let quitter = document.getElementById('quitter'); //Variable bouton configurer



let travailMinutes = document.getElementById('minutes'); //Balise p contenant les minutes
let travailSecondes = document.getElementById('secondes'); //Balise p contenant les secondes

let etatEnCours = document.getElementById('etat'); //On récupère l'élément d'ID 'travail' 
let pomodoro = document.getElementById('pomodoro')

let timerActif = false; //Afin de savoir si le timer est actif
let timerEnPause = false;
let lancementTimer = null;


let cercle = document.getElementById('cercle');

configurer.addEventListener('click', function(){
    document.getElementById('pomodoro').style.display = 'none';
    document.getElementById('formulaire').style.display = 'flex';


    if (timerActif == true) {
        clearInterval(lancementTimer); //permet d'arreter le timer 
        lancementTimer = null;
        timerActif = false;
        etatEnCours.innerHTML = "Le timer n'est pas active";
        travailMinutes.innerHTML = "25"; //remet le timer à 25minutes
        travailSecondes.innerHTML = "00";

        document.body.classList.remove('enPause');
        cercle.classList.remove('enPause');

        lancer.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
})


quitter.addEventListener('click', function(){
    document.getElementById('pomodoro').style.display = 'flex';
    document.getElementById('formulaire').style.display = 'none';
})


//Listener permettant de savoir si le bouton "lancer" est cliqué ou non
lancer.addEventListener('click', function () {
    if (lancementTimer == null) {
        etatEnCours.innerHTML = "Travail en cours";
        lancer.innerHTML = '<i class="fas fa-pause"></i>'
        lancementTimer = setInterval(timer, 1000); //lance la fonction timer avec un interval de 1 seconde
    }
    else if (timerActif == true) {
        clearInterval(lancementTimer); //permet d'arreter le timer 
        lancementTimer = null;
        timerActif = false;
        etatEnCours.innerHTML = "Le timer n'est pas active";
        travailMinutes.innerHTML = "25"; //remet le timer à 25minutes
        travailSecondes.innerHTML = "00";

        document.body.classList.remove('enPause');
        cercle.classList.remove('enPause');

        lancer.innerHTML = '<i class="fa-solid fa-play"></i>';
    }

})

function timer() {
    timerActif = true;
    let minutes = parseInt(travailMinutes.innerHTML); //On récupère les minutes
    let secondes = parseInt(travailSecondes.innerHTML); //On récupère les secondes

    if (minutes == 0 && secondes == 0) {
        if (timerEnPause == false) {
            timerEnPause = true;
            etatEnCours.innerHTML = "Pause en cours";

            travailMinutes.innerHTML = "00";
            travailSecondes.innerHTML = "3";

            document.body.classList.add('enPause');
            cercle.classList.add('enPause');

        }
        else if (timerEnPause == true) {
            timerEnPause = false;
            etatEnCours.innerHTML = "Travail en cours";

            travailMinutes.innerHTML = "00";
            travailSecondes.innerHTML = "4";

            document.body.classList.remove('enPause');
            cercle.classList.remove('enPause');
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





}