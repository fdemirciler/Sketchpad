// Get elements

const btn = document.getElementById('button');

btn.addEventListener('click', getNumber);

const canvas = document.getElementsByClassName('container')[0];


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

    for (let i = 1; i <= num; i++) {

        let rowdiv = document.createElement('div');
        rowdiv.className = 'rows';

        for (let j = 1; j <= num; j++) {

            let coldiv = document.createElement('div');
            coldiv.className = 'columns';
            // coldiv.textContent = j;
            rowdiv.appendChild(coldiv);
        }

        canvas.appendChild(rowdiv);
    }

}

// reset grid

// function holdOn() {
//     window.location.reload()
//     return Promise.resolve().then( () => {
//         getNumber()
//     })

// }