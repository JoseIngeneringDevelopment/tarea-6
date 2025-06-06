
let Guatemala = document.getElementById("ejercicio1");
let India = document.getElementById("ejercicio2");
let Bajos = document.getElementById("ejercicio3");
let Suecia = document.getElementById("ejercicio4");
let Suiza = document.getElementById("ejercicio5");
let Francia = document.getElementById("ejercicio6");

function obtenerBandera() {
    return document.getElementById('listaBanderas').value;
}

function ponerBandera() {
    Guatemala.style.display="none";
    India.style.display="none";
    Bajos.style.display="none";
    Suecia.style.display="none";
    Suiza.style.display="none";
    if (Francia) Francia.style.display="none";

    if (obtenerBandera()== "Guatemala") Guatemala.style.display="block";

    if (obtenerBandera()== "India") India.style.display="block";

    if (obtenerBandera()== "Bajos") Bajos.style.display="block";

    if (obtenerBandera()== "Francia" && Francia)
        Francia.style.display="block";

    if (obtenerBandera()== "Suecia") Suecia.style.display="block";

    if (obtenerBandera()== "Suiza") Suiza.style.display="block";
}
