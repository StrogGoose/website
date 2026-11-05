// 1. Находим нашу кнопку на странице
// Мы ищем первый тег <button> в документе
const myButton = document.querySelector('button');

// 2. Вешаем на нее событие "клик"
myButton.addEventListener('click', () => {
  // 3. Что должно произойти при клике?
  window.location.href = 'https://discord.gg/x4WZ3RQxDD';
});