let indiceImage = 0;



var afficheImages = function() {
    var diapo = document.getElementById("diapo");
    diapo.src = tabImages[indiceImage];
}

var imageSuivante = function() {
    indiceImage = (indiceImage+1)%tabImages.length;
    afficheImages();
}

var imagePrecedente = function() {
    indiceImage = (indiceImage-1+tabImages.length)%tabImages.length;
    afficheImages();
}

var setupListeners = function() {
    var n = document.getElementById("next");
    n.addEventListener('click', imageSuivante);
    var p = document.getElementById("previous");
    p.addEventListener('click', imagePrecedente);
}

let monTimer = window.setInterval(imageSuivante,7000);

window.addEventListener("load",setupListeners);