////////////////////// EXECUTION DES FONCTIONS //////////////////////////
window.onload = function() {
    printSumGold();
}

////////////////////// FONCTIONS GLOBALES ///////////////////////////////
localStorage.setItem('coins', '0');

function printSumGold() {
    let sumgold = document.getElementById('sumgold');
    sumgold.textContent = localStorage.getItem('coins');
}

////////////////////// VARIABLES GLOBALES ///////////////////////////////
