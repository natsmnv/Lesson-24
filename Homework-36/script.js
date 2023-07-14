let arr = [1, 2, 3];
let arr1 = [1, 2, [1.1, 1.2, 1.3], 3];
let parent = document.querySelector('body');

function generateList(array) {
    let ul = document.createElement('ul');
    array.forEach(function(element) {
        let li = document.createElement('li');

        if (Array.isArray(element)) {
            li.appendChild(generateList(element));
        } else {
            li.textContent = element;
        }
        ul.appendChild(li);
    })
    return ul;
}
  
let list = generateList(arr);
let list1 = generateList(arr1);

parent.appendChild(list);
parent.appendChild(list1);