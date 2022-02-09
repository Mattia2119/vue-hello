//Inserisco la sintassi per istanziare Vue//
//Vue lavorerà dentro il tag con id "root"//
//Inserisco tramite la parola chiave data, un oggetto//
const start = new Vue (
    {
        el: "#root",
        data: {
        messaggio: "Esercizio 1",
        immagine: "https://picsum.photos/200"
        }

    }
);

