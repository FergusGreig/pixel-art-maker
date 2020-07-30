// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(rows,cols) {
    var row = newFunction();
    var table = document.getElementById(pixelCanvas);
    table.innerHTML = ''; // clears the grid
    for (var i = 0; i<rows; i++){
        row = table.insertRow(i);
        for (var j = 0; j<cols; j++){
            row.insertCell(j)
        }
    }
}
