document.getElementById("mybutton").addEventListener
    ("click", eredmenyek)

function eredmenyek() {
    let pontok = 0;

    const elso = document.getElementById("pelda").selectedIndex;
    if (elso == 3 /*&& elso === "Michael Schumacher"*/) { pontok = pontok + 1 }
    /*else {pontok = pontok - 1}
        if (pontok != 0);*/

    const masodik = document.getElementById("gyozelem_103").value;
    if (/*masodik == 103 && */ masodik == "103") { pontok = pontok + 1 }
    /*if (masodik == 1) {pontok = pontok + 1}*/
    /*else {pontok = pontok - 1}
        if (pontok != 0);*/

    const harmadik = document.getElementById("Max_Verstappen").value;
    if (harmadik == "Max Verstappen" /* && harmadik === "Max Verstappen"*/) { pontok = pontok + 1 }
    /*else {pontok = pontok - 1}
        if (pontok != 0);*/

    const negyedik = document.getElementById("jo_valasz").checked;
    if (negyedik == 1 /*&& negyedik === "2010"*/) { pontok = pontok + 1 }
    /*else {pontok = pontok - 1}
        if (pontok != 0);*/

    const ot_egy = document.getElementById("vet").checked;
    const ot_ketto = document.getElementById("ham").checked;
    const ot_harom = document.getElementById("sch").checked;
    const ot_negy = document.getElementById("ver").checked;
    const ot_ot = document.getElementById("rai").checked;
    if (ot_egy == 1 && ot_ketto == 1 && ot_harom == 1 && ot_negy == 1 && ot_ot == 0) { pontok = pontok + 4 }
    /*&& = logikai és*/
    /*else {pontok = pontok - 1}
        if (pontok != 0);*/

    alert(`Összesen ${pontok} pontot értél el a 8-ból!`);

    if (pontok == 8) { alert("Gratulálok! Megnyerted az álomutazásodat! Részletekkel hamarosan értesítünk") }
    if (pontok < 8 && pontok >= 6) { alert("Semmi gond! Legközelebb te nyersz") }
}