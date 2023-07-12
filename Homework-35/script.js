let prev = document.getElementById('prev');
let next = document.getElementById('next');
let img = document.querySelector('img');

let index = 1;

function currentImg() {
    img.src = `./images/${index}.jpg`;
    img.alt = index;

    if (index === 1) {
        prev.style.display = 'none';
    } else {
        prev.style.display = 'block';
    }

    if (index === 9) {
        next.style.display = 'none';
    } else {
        next.style.display = 'block';
    }
}

function prevImg () {
    if (index > 1) {
        index--;
        currentImg();
    }
}

function nextImg() {
    if (index < 9) {
        index++;
        currentImg();
    }
}

prev.addEventListener('click', prevImg);
next.addEventListener('click', nextImg);
currentImg();