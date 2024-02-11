
function validering(){
    const navnValidering = /^[a-zA-Z]/;
    const telefonnnrValidering = /^[1-9]/
    const epostValidering = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    let valgtFilm = document.getElementById("velgFilm").value;
    let mengdeBilletter = document.getElementById("antallBilletter").value;
    let fornavn = document.getElementById("oppgiFornavn").value;
    let etternavn = document.getElementById("oppgiEtternavn").value;
    let telefonnr = document.getElementById("oppgiTelefonnr").value;
    let epost = document.getElementById("oppgiEpost").value;

    if(valgtFilm == ""){
        alert("Vennligst velg en film!")
    }else if(mengdeBilletter == "" || mengdeBilletter == "0"){
        alert("Vennligst oppgi gyldig mengde billetter!")
    }else if(!navnValidering.test(fornavn) || fornavn == ""){
        alert("Vennligst oppgi fornavn!")
    }else if(!navnValidering.test(etternavn) || etternavn == ""){
        alert("Vennligst oppgi etternavn!")
    }else if(!telefonnnrValidering.test(telefonnr) || telefonnr == ""){
        alert("Vennligst oppgi en gyldig telefonummer!")
    }else if(!epostValidering.test(epost) || epost == ""){
        alert("Vennligst oppgi en gyldig e-postaddresse")
    }
}