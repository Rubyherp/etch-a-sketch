
const container = document.querySelector('.container');

function createGrid(size) {
    document.documentElement.style.setProperty('--size', size);
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

let setTimeId = null;

function changeBoxColor(e) {
    clearInterval(setTimeId);
    setTimeId = setInterval(() => {
        const r = Math.floor(Math.random()* 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
         e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
         e.target.style.boxShadow = `-10px -3px rgb(${r}, ${g}, ${b}`;
    }, 1);
}

function generateHeaderColor() {
    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.documentElement.setProperty('--r', r);
    document.documentElement.setProperty('--g', g);
    document.documentElement.setProperty('--b', b);
}



// function unchangeColor(e) {
//     clearInterval(setTimeId);
//     e.target.style.backgroundColor = `grey`
// }

generateHeaderColor();
createGrid(100);


