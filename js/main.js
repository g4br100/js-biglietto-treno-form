let km, eta, prezzo;
const gen = document.getElementById("gen");
const ann = document.getElementById("ann");
gen.addEventListener ("click", function () {
    km = document.getElementById("km").value;
    console.log(km);
    eta = document.getElementById("eta").value;
    console.log(eta);
    const nome = document.getElementById("nome").value;
    console.log(nome);
    prezzo = km * 0.21;
    console.log(prezzo);
    if (eta < 18) {
        prezzo = prezzo - ( prezzo * 20 ) / 100;
        document.getElementById("offerta").innerHTML = "Sconto minorenne";
    } else if (eta >= 65) {
        prezzo = prezzo - ( prezzo * 40 ) / 100;
        document.getElementById("offerta").innerHTML = "Sconto over 65";
    } else{
        document.getElementById("offerta").innerHTML = "Prezzo standard";
    }
    const carrozza = Math.floor(Math.random() * 49) + 1;
    const codice =  Math.floor(Math.random() * (100000 - 90000)) + 1000;
    document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) + "€";
    document.getElementById("nomef").innerHTML = nome;
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("codice").innerHTML = codice;
    document.getElementById('biglietto').className = "mostra";
    console.log(
        `${prezzo}`
        `${nome}`
        `${carrozza}`
        `${codice}`
    )
}
);

ann.addEventListener ("click", function () {
    document.getElementById("biglietto").className = "nascondi";
    document.getElementById("offerta").innerHTML = "";
    document.getElementById("prezzo").innerHTML = "";
    document.getElementById("nomef").innerHTML = "";
    document.getElementById("carrozza").innerHTML = "";
    document.getElementById("codice").innerHTML = "";
}
);