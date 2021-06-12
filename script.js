const btn = document.getElementById('button');

btn.addEventListener('click', getNumber);


function getNumber() {

    let num = parseInt(prompt('Please enter a number between 1 and 64'));

    if (!isNaN(num) && num > 0 && num < 65) {

        console.log(num)

    } else {

        alert('Please enter a number between 1 and 64')
    }

}

let canvas = document.getElementsByClassName('container')[0];


function defaultGrid() {

    for (let i = 1; i <= 256; i++) {
        let div = document.createElement('div');
        div.textContent = i;
        canvas.appendChild(div);
    }
}