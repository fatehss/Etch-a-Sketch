

const grid_height = 400;
const grid_width = 400;
let num_cols = 50;   //dimensions of the grid
let num_rows = 50;

const container = document.querySelector('.sketch-container');

container.style.height = grid_height;
container.style.height = grid_width;

let color = 'black';    //stores color
const colorPicker = document.querySelector('#pick-color');
colorPicker.addEventListener('input', function(e){
    color = e.target.value;
})

const gridDimensions = document.querySelector('#range-slider');
gridDimensions.addEventListener('input', function(e){
    num_cols = e.target.value;
    num_rows = e.target.value;
    console.log('working');
    container.replaceChildren(); //removes all child nodes and their child nodes
    setGrid(num_cols, num_rows);
});


function toggleGridLines(){
    const boxes = document.querySelectorAll('.box');
    for (let i =0; i< boxes.length; ++i){
        if (boxes[i].style.border != '1px solid black'){
            boxes[i].style.border = '1px solid black';
            boxes[i].style.margin = '-1px';
        }
        else{
            boxes[i].style.margin = '0px';
            boxes[i].style.border = 'none';
        }

  
    }
}
const gridLines = document.querySelector('.grid-lines-box');
gridLines.addEventListener('change',toggleGridLines);

let pause = false;
document.addEventListener('keypress',(e) => {
if (e.key == 't'){
        pause = (!pause);
    }
});

function setGrid(num_rows, num_cols)
{
    gridLines.checked = '';
    for(let i =0; i<num_rows; ++i)
    { //initialize using a standard nested for loop, creating rows then indivual boxes

        let newRow = document.createElement('div'); //
        newRow.style.display = 'flex';
        newRow.style.flex = '1 1 auto'
        newRow.style.height = (grid_height/num_rows) + 'px';
        newRow.style.width = grid_width + 'px';
        for (let j = 0; j<num_cols; ++j){
            let newBox = document.createElement('div');
            newBox.style.height = (grid_height/num_rows) + 'px';
            newBox.style.width = (grid_width/num_rows) + 'px';
            newBox.classList.add('box');

            newBox.addEventListener('mouseover', function(e){   //function that sets the sketch value to a
                if (!pause){e.target.style.backgroundColor = color;}
            })
            newRow.appendChild(newBox);
        }
        //(i%2 == 0)?(newRow.style.backgroundColor = 'red') :(newRow.style.backgroundColor = 'yellow') ;
        container.appendChild(newRow);
    }
}

setGrid(num_rows, num_cols);    //initialize grid


const resetButton = document.querySelector('.reset-button');

resetButton.onclick = function ()
{
    let boxes = document.getElementsByClassName('box');
    for (let i =0; i<boxes.length; ++i){
        boxes[i].style.backgroundColor = 'white';
    }
}






