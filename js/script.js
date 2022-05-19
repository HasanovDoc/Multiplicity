const btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', () => {
    result.textContent = String(random(getRandomInt(100)));
});

//функция для рандомного числа, на вход макс. знач.
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
};

//функция проверки на кратность 15-ти, 3-ем, 5-ти, на вход число для проверки.
function random(num) {
    if (num % 15 == 0) {
        return ("FizzBuzz");
    } else if (num % 3 == 0) {
        return ("Fizz");
    } else if (num % 5 == 0) {
        return ("Bozz");
    } else {
        return num;
    };
};