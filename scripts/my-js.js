function addRow(){
    const row = document.createElement('div');
    row.classList.add('flex');
    return row;
}

function addSquare(){
    const square = document.createElement('div');
    square.classList.add('square');
    return square;
}

function loadGrid(){
    const container = document.querySelector('body');
    for (let i = 0; i < 16; i++){
        const row = addRow();

        for (let j = 0; j < 16; j++){
            row.appendChild(addSquare());
        }
        container.appendChild(row);
    }
}

loadGrid();