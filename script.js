let boutonLancer = document.getElementById('lancer'); //Variable bouton boutonLancer
let boutonConfigurer = document.getElementById('configurer'); //Variable bouton boutonConfigurer
let boutonQuitterFormulaire = document.getElementById('quitter'); //Variable bouton boutonConfigurer
let boutonValiderFormulaire = document.getElementById('valider');

let minutesTravail = 25;
let secondesTravail = 0;
let minutesPause = 5;
let secondesPause = 0;

let TempsTravailMinutes = document.getElementById('minutes'); //Balise p de la page HTML contenant les minutes
let tempsTravailSecondes = document.getElementById('secondes'); //Balise p de la page HTML contenant les secondes

let etatEnCours = document.getElementById('etat'); //On récupère l'élément d'ID 'etat' afin de dire lorsqu'on est en temps de pause/travail
let cercleTimer = document.getElementById('cercle'); //On récupère l'élément d'ID 'cercle', afin de pouvoir afficher le cercle différement dans le futur 

let timerActif = false; //Afin de savoir si le timer est actif
let timerEnPause = false;
let lancementTimer = null;

let formulaire = document.getElementById('boxFormulaire');

//S'active lorsque le bouton "Configurer" (rouage) est cliqué
boutonConfigurer.addEventListener('click', function () {
    document.getElementById('pomodoro').style.display = 'none'; //Permet de cacher la page avec le chronomètre
    document.getElementById('formulaire').style.display = 'flex'; //Et affiche donc la page avec le formulaire

    //Voir fonction pour explication
    if (timerActif == true) {
        resetTimer();
    }
})

//S'active lorsque le bouton "Quitter" (porte exit), situé en dessous du formulaire, est cliqué
boutonQuitterFormulaire.addEventListener('click', function () {
    document.getElementById('pomodoro').style.display = 'flex';
    document.getElementById('formulaire').style.display = 'none';

    if (timerActif == true) {
        resetTimer();
    }
})

//S'active lorsque le bouton "Valider" du formulaire est cliqué 
//Permet de choisir le temps de travail et de pause en récupèrant les valeurs des input, 
//et en les mettants dans les variables correspondantes.
boutonValiderFormulaire.addEventListener('click', function(event) {
    event.preventDefault(); 


    minutesTravail = parseInt(document.getElementById('minutesTravail').value);
    secondesTravail = parseInt(document.getElementById('secondesTravail').value);
    minutesPause = parseInt(document.getElementById('minutesPause').value);
    secondesPause = parseInt(document.getElementById('secondesPause').value);

    TempsTravailMinutes.innerHTML = minutesTravail;
    tempsTravailSecondes.innerHTML = secondesTravail;    
    TempsTravailMinutes.innerHTML = minutesPause;
    tempsTravailSecondes.innerHTML = secondesPause;

    document.getElementById('pomodoro').style.display = 'flex';
    document.getElementById('formulaire').style.display = 'none';
});


//S'active lorsque le bouton "Lancer" du formulaire est cliqué; active donc le chronomètre
boutonLancer.addEventListener('click', function () {
    if (lancementTimer == null) {
        etatEnCours.innerHTML = "Travail en cours";
        boutonLancer.innerHTML = '<i class="fa-solid fa-rotate-right"></i>' //Pour changer l'aspect du bouton
        lancementTimer = setInterval(timer, 1000); //lance la fonction timer avec un interval de 1 seconde
    }
    else if (timerActif == true) {
        resetTimer();
    }

})

function timer() {
    timerActif = true;
    let minutes = parseInt(TempsTravailMinutes.innerHTML); //On récupère les minutes
    let secondes = parseInt(tempsTravailSecondes.innerHTML); //On récupère les secondes

    if (minutes == 0 && secondes == 0) {
        if (timerEnPause == false) {
            timerEnPause = true;
            etatEnCours.innerHTML = "Pause en cours";

            TempsTravailMinutes.innerHTML = minutesTravail;
            tempsTravailSecondes.innerHTML = secondesTravail;

            document.body.classList.add('enPause');
            cercleTimer.classList.add('enPause');

        }
        else if (timerEnPause == true) {
            timerEnPause = false;
            etatEnCours.innerHTML = "Travail en cours";

            TempsTravailMinutes.innerHTML = minutesPause;
            tempsTravailSecondes.innerHTML = secondesPause;

            document.body.classList.remove('enPause');
            cercleTimer.classList.remove('enPause');
        }
    }

    else if (secondes == 0 && minutes > 0) {
        tempsTravailSecondes.innerHTML = '59';
        if (minutes < 11) {
            TempsTravailMinutes.innerHTML = '0' + (minutes - 1);
        }
        else {
            TempsTravailMinutes.innerHTML = '' + (minutes - 1);
        }

    }

    else if (secondes > 0) {
        if (secondes < 11) {
            tempsTravailSecondes.innerHTML = '0' + (secondes - 1);
        }
        else {
            tempsTravailSecondes.innerHTML = '' + (secondes - 1);
        }
    }
}

function resetTimer() {
    clearInterval(lancementTimer); //Permet d'arreter le timer 

    lancementTimer = null;
    timerActif = false;

    etatEnCours.innerHTML = "Le timer n'est pas activé";
    TempsTravailMinutes.innerHTML = "25"; //remet le timer à 25minutes
    tempsTravailSecondes.innerHTML = "00";

    document.body.classList.remove('enPause');
    cercleTimer.classList.remove('enPause');

    boutonLancer.innerHTML = '<i class="fa-solid fa-play"></i>';
}