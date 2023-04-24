function addRow(){
    const row = document.createElement('div');
    row.classList.add('flex');
    return row;
}

function addSquare(){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        const rand1 = Math.round(Math.random() * 255);
        const rand2 = Math.round(Math.random() * 255);
        const rand3 = Math.round(Math.random() * 255);
        square.style.background = `rgb(${rand1},${rand2},${rand3})`;
    })
    return square;
}

function loadGrid(size=16){
    const container = document.querySelector('.grid-daddy');
    for (let i = 0; i < size; i++){
        const row = addRow();

        for (let j = 0; j < size; j++){
            row.appendChild(addSquare());
        }
        container.appendChild(row);
    }
}

function removeGrid(){
    console.log("removing grid...")
    const all = document.querySelectorAll('.flex');
    console.log(all.length);
    all.forEach(div => div.remove());

}

loadGrid();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let newSize = Number(prompt("Grid Size: "));
    console.log(typeof(newSize));
    newSize = (newSize <= 100) ? newSize : 100;
    removeGrid();
    loadGrid(newSize);
})