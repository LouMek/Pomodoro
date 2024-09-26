let lancer = document.getElementById('lancer'); //Variable bouton lancer

let travailMinutes = document.getElementById('minutes'); //Balise p contenant les minutes
let travailSecondes = document.getElementById('secondes'); //Balise p contenant les secondes

let travailEnCours = document.getElementById('travail'); //On récupère l'élément d'ID 'travail' 
let pauseEnCours = document.getElementById('pause'); //On récupère l'élément d'ID 'pause' 

let timerActif = false; //Afin de savoir si le timer est actif
let timerPauseDepart = false;
let lancementTimer = null;


//Listener permettant de savoir si le bouton "lancer" est cliqué ou non
lancer.addEventListener('click', function () {
    if (lancementTimer == null) {
        travailEnCours.classList.add('actionActive'); //Permet d'activer le visuel "Travail" dans le panel
        lancementTimer = setInterval(timer, 1000); //lance la fonction timer avec un interval de 1 seconde
    }
    else if(timerActif == true) {
        clearInterval(lancementTimer); //permet d'arreter le timer 
        lancementTimer = null;
        timerActif = false;
        travailMinutes.innerHTML = "25"; //remet le timer à 25minutes
        travailSecondes.innerHTML = "00";
    }

})

function timer() {

    timerActif = true;
    let minutes = parseInt(travailMinutes.innerHTML); //On récupère les minutes
    let secondes = parseInt(travailSecondes.innerHTML); //On récupère les secondes


    if (timerPauseDepart == true) {
        timerPauseDepart == false;
        //Permet de remettre la valeur de la pause afin de reswitch sur la partie travail (et donc switch les effets visuels)
    }


    if (minutes == 0 && secondes == 1) {
        if(timerPauseDepart == false){
            travailEnCours.classList.remove('actionActive'); //Modifi le panel
            pauseEnCours.classList.add('actionActive');
            document.body.classList.add('enPause'); //Change la couleur du Body en vert
            travailMinutes.innerHTML = "00";
            travailSecondes.innerHTML = "01";
            timerPauseDepart = true;
        }
        else{
            travailEnCours.classList.add('actionActive'); 
            pauseEnCours.classList.remove('actionActive');
            document.body.classList.remove('enPause'); 
            travailMinutes.innerHTML = "00";
            travailSecondes.innerHTML = "01";
            timerPauseDepart = false;
        }
        

    }

    else if (secondes == 0 && minutes > 0) {
        travailSecondes.innerHTML = '59';
        travailMinutes.innerHTML = '' + (minutes - 1);
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