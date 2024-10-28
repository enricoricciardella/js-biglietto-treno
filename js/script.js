//DATI
//VARIABILI
const PrezzoPerKm = 0.21;
const Sconto20 = 20;
const Sconto40 = 40;
let Sconto;
let PrezzoIntero;
let KmPercorsi = prompt("Quanti km devi percorrere?");
let Eta = prompt("Quanti anni hai?");
 PrezzoIntero = PrezzoPerKm * KmPercorsi;

 //Esecuzione Logica

if (isNaN(Eta)|| isNaN(KmPercorsi)){
    alert("Inserisci i dati correttamente, quindi aggiorna la pagina!");
} else if (Eta < 18) {
    Sconto = PrezzoIntero / 100 * Sconto20;
    PrezzoIntero = PrezzoIntero - Sconto;
} else if (Eta > 65) {
    Sconto = PrezzoIntero / 100 * Sconto40;
    PrezzoIntero = PrezzoIntero - Sconto;
}
PrezzoIntero = PrezzoIntero.toFixed(2);
console.log(`Il prezzo del biglietto è ${PrezzoIntero}`);
