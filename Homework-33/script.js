let funnyElem = document.getElementById('funnyEmoji');
let funnyCounter = document.getElementById('funnyEmojiCounter');
let funnyCount = 0;

let loveElem = document.getElementById('loveEmoji');
let loveCounter = document.getElementById('loveEmojiCounter');
let loveCount = 0;

let idkElem = document.getElementById('idkEmoji');
let idkCounter = document.getElementById('idkEmojiCounter');
let idkCount = 0;

let omgElem = document.getElementById('omgEmoji');
let omgCounter = document.getElementById('omgEmojiCounter');
let omgCount = 0;

let sadElem = document.getElementById('sadEmoji');
let sadCounter = document.getElementById('sadEmojiCounter');
let sadCount = 0;


funnyElem.addEventListener('click', function() {
    funnyCount++;
    funnyCounter.textContent = funnyCount;
});

loveElem.addEventListener('click', function() {
    loveCount++;
    loveCounter.textContent = loveCount;
});

idkElem.addEventListener('click', function() {
    idkCount++;
    idkCounter.textContent = idkCount;
});

omgElem.addEventListener('click', function() {
    omgCount++;
    omgCounter.textContent = omgCount;
});

sadElem.addEventListener('click', function() {
    sadCount++;
    sadCounter.textContent = sadCount;
});