let lancer = document.getElementById('lancer')
console.log(lancer);


let travailMinutes = document.getElementById('minutes');
let travailSecondes = document.getElementById('secondes')
let timerActif = false;


lancer.addEventListener('click', function () {
    if (timerActif == false) {
        lancementTimer = setInterval(timer, 1000);
    }
    else if(lancementTimer){
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

    if (minutes == 0 && secondes == 0) {
        timerActif = False;
    }

    else if (secondes > 0) {
        if(secondes < 11) {
            travailSecondes.innerHTML = '0' + (secondes - 1);
        }
        else{
            travailSecondes.innerHTML = secondes - 1;
        }
    }
    else if (secondes == 0 && minutes > 0) {
        travailSecondes.innerHTML = 59;
        travailMinutes.innerHTML = minutes - 1;
    }
}