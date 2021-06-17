// Get elements

const btn = document.getElementById('button');

btn.addEventListener('click', getNumber);

const canvas = document.querySelector('.container');

function gridSize(num) {
    canvas.style.setProperty("--grid-rows", num);
    canvas.style.setProperty("--grid-columns", num);
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


// Draw function

function drawGrid(num) {

    for (let i = 1; i <= num * num; i++) {

        let rowdiv = document.createElement('div');
        rowdiv.className = 'rows';
        canvas.appendChild(rowdiv);
        gridSize(num)

    }

    // //setColor()
}


function randomColor() {

    return Math.floor(Math.random() * 16777215).toString(16);

}

document.documentElement.style.setProperty('--bg-color',randomColor());


function setColor() {
    let cells = document.querySelectorAll(".rows");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function (e) {
            console.log(i)
            e.target.style.backgroundColor = randomColor();
        });
    }
}

// const cells = document.getElementsByClassName('rows');
// [].forEach.call(cells, function (p) {
//     p.addEventListener('mouseover', function (e) {
//         console.log(e)
//     })
// })


// Array.from(document.getElementsByClassName('columns')).forEach(el => {

//     el.innerHTML = 'X'

//     // .style.setProperty('--background-color', randomColor)

// })

// document.getElementsByClassName('columns').forEach(function (cell) {

//     cell.addEventListener('mouseover', function (e) {
//         e.style.backgroundColor = randomColor()
//     })
// })

// window.onload = function() {
//     setTimeout(function() {
//       document.documentElement.style.cssText = "--main-background-color: red";
//     }, 2000);
//   }