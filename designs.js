// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(rows,cols) {
    const table = document.getElementById('pixelCanvas');
    table.innerHTML = ''; // clears the grid
    for (var i = 0; i<rows; i++){
        row = table.insertRow(i);
        for (var j = 0; j<cols; j++){
            row.insertCell(j)
        }
    }
}
var width;
var height;

const form = document.getElementById('sizePicker');
form.addEventListener("submit",function(event){
    event.preventDefault();
    height = parseInt(form.elements[0].value, 10);
    width = parseInt(form.elements[1].value,10);
    makeGrid(height,width)
})
