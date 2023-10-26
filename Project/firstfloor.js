// Получаем ссылки на кнопки arrowright и arrowleft
const arrowRightButton = document.getElementById("arrowRight");
const arrowLeftButton = document.getElementById("arrowLeft");

let isArrowRightVisible = true; // Инициализируем флаг
let isArrowLeftVisible = false; // Инициализируем флаг
// Скрываем кнопку arrowLeft изначально
arrowLeftButton.style.display = 'none';

// Добавляем обработчик события на кнопку arrowright
arrowRightButton.addEventListener("click", function () {
    // Переключаем видимость кнопок arrowRight и arrowLeft
    if (isArrowRightVisible) {
        arrowLeftButton.style.display = 'block';
        arrowRightButton.style.display = 'block';
    } else {
        arrowLeftButton.style.display = 'block';
        arrowRightButton.style.display = 'none';
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
    } else {
        arrowLeftButton.style.display = 'block';
        arrowRightButton.style.display = 'block';
    }

    // Инвертируем значение флага
    isArrowLeftVisible = !isArrowLeftVisible;
});

