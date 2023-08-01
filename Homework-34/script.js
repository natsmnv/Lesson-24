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

let myPurchases = document.getElementById('myPurchases');
let returnBtn = document.getElementById('return');

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
            let subjectElement = document.getElementById(id);
            let paragraph = subjectElement.querySelector('p');
            subject = paragraph.innerText;

            form.style.display = 'block';
        })
    });
};

function validateForm(event) {
    event.preventDefault();
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

    savePurchases();

    form.style.display = 'none';
    hide(laptops);
    hide(phones);
    hide(headphones);

    hide(infoLaptops);
    hide(infoPhones);
    hide(infoHeadphones);

    alert(`
        Ім'я: ${firstName}
        Призвище: ${secondName}
        ${patronymic === '' ? '' : `По батькові: ${patronymic}`}
        Місто: ${city}
        Нова Пошта: ${newPost}
        Товар: ${subject}`);
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

function savePurchases() {
    if (subject) {
        let savedPurchases = localStorage.getItem("purchases") || '';

        const date = new Date().toLocaleDateString();
        const order = `${subject} Дата замовлення: ${date} Ціна: ${document.getElementById('price').innerText}\n`;
        
        savedPurchases += order;

        localStorage.setItem("purchases", savedPurchases);
    }
}

function showPurchases() {
    hide(categories);
    let categoryTitle = document.getElementById("categoryTitle");
    categoryTitle.style.display = 'none';
    returnBtn.style.display = 'inline-block';
    myPurchases.style.display = 'none';

    let savedPurchases = localStorage.getItem("purchases") || '';

    let orderArr = savedPurchases.split('\n');

    if (orderArr[orderArr.length - 1] === '') {
        orderArr.pop();
    }

    let purchasesDisplay = document.getElementById("listMyPurchases");
    purchasesDisplay.textContent = '';

    purchasesDisplay.style.display = 'inline-block';

    orderArr.forEach(function(element, index) {
        let orderBlock = document.createElement('div');
        orderBlock.classList.add('order');

        let order = document.createElement('p');
        order.textContent = element;
        orderBlock.appendChild(order);

        let btnDelete = document.createElement('button');
        btnDelete.textContent = "Видалити";
        orderBlock.appendChild(btnDelete);
        purchasesDisplay.appendChild(orderBlock);

        btnDelete.addEventListener('click', function() {
            purchasesDisplay.removeChild(orderBlock);

            orderArr.splice(index, 1);
            const updatedSavedPurchases = orderArr.join('\n');
            localStorage.setItem("purchases", updatedSavedPurchases);
        })
    })

    returnBtn.addEventListener('click', function() {
        purchasesDisplay.style.display = 'none';
        categories.forEach(function(element) {
            element.style.display = 'block';
        })
        categoryTitle.style.display = 'block';
        returnBtn.style.display = 'none';
        myPurchases.style.display = 'inline-block';
    })

}