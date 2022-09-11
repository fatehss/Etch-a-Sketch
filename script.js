

const grid_height = 400;
const grid_width = 400;
const num_cols = 50;   //dimensions of the grid
const num_rows = 50;

const container = document.querySelector('.sketch-container');
const grid = [];
let color = 'green';

function setGrid(num_rows, num_cols)
{
    for(let i =0; i<num_rows; ++i)
    { //initialize using a standard nested for loop, creating rows then indivual boxes

        let newRow = document.createElement('div'); //
        newRow.style.display = 'flex';
        newRow.style.height = (grid_height/num_rows) + 'px';
        newRow.style.width = grid_width + 'px';
        for (let j = 0; j<num_cols; ++j){
            let newBox = document.createElement('div');
            newBox.style.height = (grid_height/num_rows) + 'px';
            newBox.style.width = (grid_width/num_rows) + 'px';
            newBox.classList.add('box');
            if (j%2 == 0 && i%2 == 0){(newBox.style.backgroundColor = 'blue');}
            else if (j%2 == 1 && i%2 == 1){(newBox.style.backgroundColor = 'red')}

            newBox.addEventListener('mouseover', function(e){   //function that sets the sketch value to a
                e.target.style.backgroundColor = color;
            })
            newRow.appendChild(newBox);
        }
        //(i%2 == 0)?(newRow.style.backgroundColor = 'red') :(newRow.style.backgroundColor = 'yellow') ;
        container.appendChild(newRow);
    }
}

setGrid(num_rows, num_cols);


const resetButton = document.querySelector('.reset-button');

resetButton.onclick = function ()
{
    let boxes = document.getElementsByClassName('box');
    for (let i =0; i<boxes.length; ++i){
        boxes[i].style.backgroundColor = 'white';
    }
}





/*
How to create a 16x16 grid of divs in js?

I need to create a 2d array. I can first create 16 rows and append them to the container, then worry about the columns

**/



