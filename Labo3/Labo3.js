let winCondition = [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33],
    [11, 21, 31],
    [21, 22, 32],
    [13, 23, 33],
    [11, 22, 33],
    [13, 22, 31]
]

let player = "X"
let index = 0

function changePlayer(element) {

    if (player === "X" && index === 0) {
        element.innerHTML = "X"
        index = 1
    }
    if (player === "O" && index === 0) {
        element.innerHTML = "O"
        index = 1
    }
    if (player === "X") {
        player = "O"
    }
    else {
        player = "X"
    }
}
