let klasa = document.getElementsByName("klasa");
let imieINazwisko = document.querySelector(".imie_nazwisko");
let wynik = document.querySelector(".wynik");
const zainteresowania = document.getElementsByName("zain");


let zainteresowania2 = [];
for (let i = 0; i < zainteresowania.length; i++) {
    zainteresowania[i].addEventListener("click", () => {
        if (zainteresowania[i] = zainteresowania[i].checked) {
                zainteresowania2.push(zainteresowania[i].value);
            console.log(zainteresowania2);
            return zainteresowania2
        }
    })
}




function wprowadz(){
    let klasa2 = "";
    if (imieINazwisko.value == "") {
        alert("Prosze podać imie i nazwisko")
    } else {
        for (let i=0; i < klasa.length; i++) {
            if (klasa[i] = klasa[i].checked) {
                klasa2 = klasa[i].value;
                imieINazwisko.value = "";
            }
        }
        wynik.innerHTML += `imię i nazwisko: ${imieINazwisko.value} Klasa: ${klasa2} Zainteresowania: ${zainteresowania2} <br>`
    }
    zainteresowania2 = []
}

