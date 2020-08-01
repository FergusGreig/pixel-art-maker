
// FUNCTIONS
function makeGrid(rows,cols) {
    table.innerHTML = ''; // clears the grid
    for (var i = 0; i<rows; i++){
        row = table.insertRow(i);
        for (var j = 0; j<cols; j++){
            row.insertCell(j)
        }
    }
}

//Delclarations
var width;
var height;
const table = document.getElementById('pixelCanvas');
const picker = document.getElementById('colourPicker');
const form = document.getElementById('sizePicker');

// Events 
form.addEventListener("submit",function(event){
    event.preventDefault();
    height = parseInt(form.elements[0].value, 10);
    width = parseInt(form.elements[1].value,10);
    makeGrid(height,width)
})

table.addEventListener('click',function(event){
    if (event.target.innerHTML == ''){
        event.target.style.backgroundColor = picker.value;
    }
})