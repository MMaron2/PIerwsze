let klasa = document.getElementsByName("klasa");
let imieINazwisko = document.querySelector(".imie_nazwisko");
let wynik = document.querySelector(".wynik");

function wprowadz(){
    let klasa2 = "";
    for (let i=0; i < klasa.length; i++) {
        if (klasa[i] = klasa[i].checked) {
            klasa2 = klasa[i].value;
        }
    }
    wynik.innerHTML += `imię i nazwisko: ${imieINazwisko.value} Klasa: ${klasa2} <br>`
}