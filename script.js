// Get elements

const btn = document.getElementById('button');

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
     
    }
    gridSize(num)
    setColor()
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

    return Math.floor(Math.random() * 16777215).toString(16);

}

// Change background color on hover

function setColor() {
    
    const cells = Array.from(document.querySelectorAll(".rows"));

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", function (i) {
            console.log(i)
            
            e.style.backgroundColor = randomColor();
        });
    }
}

document.documentElement.style.setProperty('--bg-color',randomColor());


// const clls = document.querySelectorAll('.rows');
// Array.from(clls).forEach(cll => {
//     cll.addEventListener('mouseover', g => {
//         g.target.style.backgroundColor = randomColor()
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