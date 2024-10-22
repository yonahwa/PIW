function getOptions() {
    let Select = document.getElementById("mySelect")
    let TableValue = new Array(5)

    for (let i = 0; i < Select.options.length; i++) {
        TableValue[i] = Select.options[i].value
    }

    alert(Select.options.length + " " + TableValue)
}