
Esercizio
*********************
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Ricordatevi un metodo che abbiamo visto durante le lezioni precedenti.
:warning: Prima di scrivere il codice impostate il ragionamento nel file README.md!
Bonus:
Applicare de controlli sull'input dell'utente
*********************

DATI
- 0.21 per ogni km percorso
- 20% di sconto per i minori di 18 anni
- 40% di sconto per i maggiori di 65 anni

ESECUZIONI LOGICHE
-Chiedere il numero di km da percorrere
-età del passeggero
-calcolare il prezzo totale senza sconto
-calcolare sconto minori 18 anni ( totale del prezzo senza sconto / 100  * 20
sottrarre il risultato dal prezzo senza sconto)
-calcolare sconto maggiori di 65 anni ( totale del prezzo senza sconto / 100  * 40
sottrarre il risultato dal prezzo senza sconto)


OUTPUT
-Stampo i risultati``