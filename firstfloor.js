// Получаем ссылки на кнопки arrowright и arrowleft
const arrowRightButton = document.getElementById("arrowRight");
const arrowLeftButton = document.getElementById("arrowLeft");
const firstFloor = document.getElementById("firstfloor");
const secondFloor = document.getElementById("secondfloor");
const thirdFloor = document.getElementById("thirdfloor");

let isArrowRightVisible = true; // Инициализируем флаг
let isArrowLeftVisible = false; // Инициализируем флаг
let isFirstFloor = true;
let isSecondFloor = false;
let isThirdFloor = false;
// Скрываем кнопку arrowLeft изначально
arrowLeftButton.style.display = 'none';
firstFloor.style.transform = 'translate(140%, 0%)';
secondFloor.style.display = 'none';
thirdFloor.style.display = 'none';
// Добавляем обработчик события на кнопку arrowright
arrowRightButton.addEventListener("click", function () {
    // Переключаем видимость кнопок arrowRight и arrowLeft
    if (isArrowRightVisible) {
        arrowLeftButton.style.display = 'block';
        arrowRightButton.style.display = 'block';
        firstFloor.style.display = 'none';
        secondFloor.style.display = 'block';
        thirdFloor.style.display = 'none';
        secondFloor.style.transform = 'translate(0%, 0%)';
    } else {
        arrowLeftButton.style.display = 'block';
        arrowRightButton.style.display = 'none';
        firstFloor.style.display = 'none';
        secondFloor.style.display = 'none';
        thirdFloor.style.display = 'block';
        thirdFloor.style.transform = 'translate(-141%, 0%)';
    }

    // Инвертируем значение флага
    isArrowRightVisible = !isArrowRightVisible;
});

// Добавляем обработчик события на кнопку arrowleft
arrowLeftButton.addEventListener("click", function () {
    // Переключаем видимость кнопок arrowRight и arrowLeft
    if (isArrowLeftVisible) {
        arrowLeftButton.style.display = 'none';
        arrowRightButton.style.display = 'block';
        firstFloor.style.display = 'block';
        secondFloor.style.display = 'none';
        thirdFloor.style.display = 'none';
    } else {
        arrowLeftButton.style.display = 'block';
        arrowRightButton.style.display = 'block';
        firstFloor.style.display = 'none';
        secondFloor.style.display = 'block';
        thirdFloor.style.display = 'none';
    }

    // Инвертируем значение флага
    isArrowLeftVisible = !isArrowLeftVisible;
});

