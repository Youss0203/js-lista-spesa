/*Consegna: 
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, 
all'interno ciclo while*/


const listaSpesa = ["biscotti","coca cola","acqua","pasta","patatine","pane"];
const elementSpesa = document.querySelector('div.wrapper');

const listaDaUtilizzare = document.createElement("ul");
      elementSpesa.appendChild(listaDaUtilizzare)


let i=0;


while( i < listaSpesa.length){

    
    
    const listaFinale = document.createElement("li");
    listaDaUtilizzare.appendChild(listaFinale)
    

}