function createTable() {

    let Table = document.createElement("table")

    let Ligne = document.getElementById("ligne");
    let cellule = document.getElementById("cell");

    let newRow = 0;
    let newCell = 0;

    for (let i = 0; i < Ligne; i++) {
        newRow = Table.insertRow(i);

        for (let y = 0; y < cellule; y++) {
            newCell = newRow[i].insertCell(y);
        }
    }
    
}