let categoryLaptops = document.getElementById('categoryLaptops');
let categoryPhones = document.getElementById('categoryPhones');
let categoryHeadphones = document.getElementById('categoryHeadphones');

let categories = document.querySelectorAll('.categories p');

let laptops = document.querySelectorAll('.items__laptops--laptop');
let phones = document.querySelectorAll('.items__phones--phone');
let headphones = document.querySelectorAll('.items__headphones--headphone');

let infoLaptops = document.querySelectorAll('.info__laptops--laptop');
let infoPhones = document.querySelectorAll('.info__phone');
let infoHeadphones = document.querySelectorAll('.info__headphone');

let btn = document.querySelectorAll('button');

let check = '';

let form = document.getElementById('form');
let error = document.getElementById('error');

let subject = '';

function hide(element) {
    element.forEach(function (element) {
        element.style.display = 'none';
    })
}

function showItems(category) {
    hide(laptops);
    hide(phones);
    hide(headphones);

    if (category === 'categoryLaptops') {
        laptops.forEach(function (element) {
            element.style.display = 'grid';
        })
    } else if (category === 'categoryPhones') {
        phones.forEach(function (element) {
            element.style.display = 'grid';
        })
    } else if (category === 'categoryHeadphones') {
        headphones.forEach(function (element) {
            element.style.display = 'grid';
        })
    }
}

function showInfo(item, itemInfo) {
    item.forEach(function (element, index) {
        element.addEventListener('click', function () {
            if (check !== '') {
                check.style.display = 'none';
            }

            itemInfo[index].style.display = 'flex';
            check = itemInfo[index];

        })
    })
}

function buy() {
    let info = 'info__';
    let buy = '--buy';
    let button;
    let id;
    btn.forEach(function (element) {
        element.addEventListener('click', function () {
            button = element.id;
            id = button.replace(info, '').replace(buy, '');
            subject = document.getElementById(id);

            form.style.display = 'block';
        })
    });
};


function validateForm() {
    let firstName = document.getElementById('firstName').value;
    let secondName = document.getElementById('secondName').value;
    let patronymic = document.getElementById('patronymic').value;

    let city = document.getElementById('city').value;
    let newPost = document.getElementById('newPost').value;


    if (!firstName || !secondName || !newPost) {
        alert(`Не всі поля заповнені!`);
        return false;
    }

    if (isNaN(newPost)) {
        error.style.display = 'inline';
        return false;
    } else {
        error.style.display = 'none';
    }

    alert(`
        Ім'я: ${firstName}
        Призвище: ${secondName}
        ${patronymic === '' ? '' : `По батькові: ${patronymic}`}
        Місто: ${city}
        Нова Пошта: ${newPost}
        Товар: ${subject.innerText}`);
    return true;
}


hide(laptops);
hide(phones);
hide(headphones);

hide(infoLaptops);
hide(infoPhones);
hide(infoHeadphones);

categories.forEach(function (element) {
    element.addEventListener('click', function (event) {
        let target = event.target.id;

        if (target === 'categoryLaptops') {
            showItems('categoryLaptops');
        } else if (target === 'categoryPhones') {
            showItems('categoryPhones');
        } else if (target === 'categoryHeadphones') {
            showItems('categoryHeadphones');
        }
    })
});

showInfo(laptops, infoLaptops);
showInfo(phones, infoPhones);
showInfo(headphones, infoHeadphones);

buy();