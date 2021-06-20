// Get elements

const btn = document.getElementById('button');
const resetButton = document.getElementById('resetbutton');

btn.addEventListener('click', getNumber);

const canvas = document.querySelector('.container');

// Set grid size

function gridSize(num) {
    canvas.style.setProperty("--grid-rows", num);
    canvas.style.setProperty("--grid-columns", num);
}

// Draw function

function drawGrid(num) {

    for (let i = 1; i <= num * num; i++) {

        let rowdiv = document.createElement('div');
        rowdiv.className = 'rows';
        canvas.appendChild(rowdiv);
        rowdiv.addEventListener('mouseover', () => {
            rowdiv.style.backgroundColor = randomColor()
            //rowdiv.classList.add('hover');
        })
    }
    gridSize(num)

}

// User input and grid draw

function getNumber() {

    const num = parseInt(prompt('Please enter a number between 1 and 64'));

    if (!isNaN(num) && num > 0 && num < 65) {

        drawGrid(num)

    } else {

        alert('Please enter a number between 1 and 64')
    }

    return num
}

// Generate random colors

function randomColor() {

    const o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

// reset button
resetButton.onclick = function () {
    canvas.innerHTML = "";

}
