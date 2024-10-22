function removecolor() {
    let Color = document.getElementById("colorSelect")

    let Delete = Color.value

    for (let i = 0; i < Color.options.length; i++) {
        if (Color.options[i].value == Delete) { 
            Color.remove(i); 
            break;
        }
    }
}