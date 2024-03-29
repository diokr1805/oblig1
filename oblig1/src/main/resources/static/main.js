let alleBilletterArray = [];
function validering() {
    let valgtFilm = document.getElementById("velgEnFilm").value;
    let mengdeBilletter = document.getElementById("antallBilletter").value;
    let fornavn = document.getElementById("oppgiFornavn").value;
    let etternavn = document.getElementById("oppgiEtternavn").value;
    let telefonnr = document.getElementById("oppgiTelefonnr").value;
    let epost = document.getElementById("oppgiEpost").value;

    const antallBilletterValidering = /^\b([0-9]|[1-9][0-9])\b/
    const navnValidering = /^[a-zA-Z]/;
    const telefonnrValidering = /^[0-9]/
    const epostValidering = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (valgtFilm === "") {
        alert("Vennligst velg en film!")
    } else if (!antallBilletterValidering.test(mengdeBilletter) || mengdeBilletter === "") {
        alert("Vennligst oppgi gyldig mengde billetter!")
    } else if (!navnValidering.test(fornavn) || fornavn === "") {
        alert("Vennligst oppgi fornavn!")
    } else if (!navnValidering.test(etternavn) || etternavn === "") {
        alert("Vennligst oppgi etternavn!")
    } else if (!telefonnrValidering.test(telefonnr) || telefonnr === "") {
        alert("Vennligst oppgi en gyldig telefonummer!")
    } else if (!epostValidering.test(epost) || epost === "") {
        alert("Vennligst oppgi en gyldig e-postaddresse")
    } else {
        let billettInfo = {
            valgtFilm: valgtFilm,
            mengdeBilletter: mengdeBilletter,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };

        alleBilletterArray.push(billettInfo);
        visBilletter();
    }
}

function visBilletter() {
    let visAlleBilletter = document.getElementById("alleBilletter");
    let html = "<ul>";

    for (let i = 0; i < alleBilletterArray.length; i++) {
        let billett = alleBilletterArray[i];
        html += "<li>Valgt film: " + billett.valgtFilm + "</li><li>Antall billetter: " + billett.mengdeBilletter +
            "</li><li>Fornavn: " + billett.fornavn + "</li><li>Etternavn: " + billett.etternavn +
            "</li><li>Telefonnummer: " + billett.telefonnr + "</li><li>E-post: " + billett.epost + "</li></ul>";
    }
    visAlleBilletter.innerHTML = html;
    alleBilletterArray.pop();
}

function slettBilletter(){

    document.getElementById("alleBilletter").innerHTML = "";
    alleBilletterArray.length = 0;
}


