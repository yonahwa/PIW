function changeContent() {
    let Table = document.getElementById("myTable")

    let cellule = document.getElementById("cell").value
    let Ligne = document.getElementById("ligne").value
    let contenu = document.getElementById("content").value

    if (Ligne == 1) {
       
        if (cellule == 1) {
            Table.rows[0].cells[0].innerHTML = contenu
        }
        if (cellule == 2) {
            Table.rows[0].cells[1].innerHTML = contenu
        }
    }
    if (Ligne == 2) {
        if (cellule == 1) {
            Table.rows[1].cells[0].innerHTML = contenu
        }
        if (cellule == 2) {
            Table.rows[1].cells[1].innerHTML = contenu
        }
    }
   
}
