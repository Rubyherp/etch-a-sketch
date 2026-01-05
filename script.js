let setTimeId = null;
let submitted = false;

const container = document.querySelector('.container');
const reset = document.querySelector('.btn-reset');
const form = document.querySelector('#form');
const input = document.querySelector('.input-value');


container.addEventListener('mouseleave', unchangeColor);
reset.addEventListener('click', resetGrid);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    return submitted
        ? totalReset(input.value)
        : createGrid(input.value)
});

function createGrid(size) {
    // document.documentElement.style.setProperty('--size', size);
    submitted = true
    for (let row = 0; row < size; row++ ){
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');
        for (let col = 0; col < size; col++) {
            const div = document.createElement('div');
            div.classList.add('box');
            div.addEventListener('mouseenter', changeBoxColor);
            // div.addEventListener('mouseleave', unchangeColor);
            rowContainer.appendChild(div); 
        }
        container.appendChild(rowContainer);
    }
}

function changeBoxColor(e) {
    clearInterval(setTimeId);
    let currentOpacity = parseFloat(e.target.style.opacity) || 0;
    if (currentOpacity < 1) {
        currentOpacity += 1;
    }
    e.target.style.opacity = currentOpacity

    setTimeId = setInterval(() => {
        const r = Math.floor(Math.random()* 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
         e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
         e.target.style.boxShadow = `-5px -5px rgb(${r}, ${g}, ${b})`;
    }, 1);
}

function generateHeaderColor() {
    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.documentElement.style.setProperty('--r', r);
    document.documentElement.style.setProperty('--g', g);
    document.documentElement.style.setProperty('--b', b);
}

function unchangeColor() {
    clearInterval(setTimeId);
}

function resetGrid() {
    const boxes = document.querySelectorAll('.container .box')
    boxes.forEach(box => {
        box.style.backgroundColor = 'grey';
        box.style.boxShadow = 'none';
        box.style.opacity = '3';
    })
}

function totalReset(newGrid) {
    submitted = false;
    container.innerHTML = '';
    createGrid(newGrid);
}

generateHeaderColor();
