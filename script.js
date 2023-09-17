// Найти модальное окно и кнопку для закрытия
var modal = document.getElementById('myModal');
var closeBtn = document.getElementsByClassName('close')[0];

// Когда кликают на кнопку Poptat cenu, отобразить модальное окно
var popButton = document.querySelector('input[type="submit"]');
popButton.onclick = function() {
    modal.style.display = 'block';
}

// Когда кликают на крестик, скрыть модальное окно
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Когда кликают вне модального окна, скрыть его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Обработчик отправки формы
var form = document.getElementById('myForm');
form.onsubmit = function(event) {
    event.preventDefault(); // Предотвратить отправку формы по умолчанию
    // Здесь вы можете добавить код для отправки данных на сервер
    // Например, отправить данные асинхронным запросом с использованием fetch() или XMLHttpRequest
    alert('Данные отправлены!'); // Здесь вы можете заменить на реальную логику отправки данных
    modal.style.display = 'none'; // Закрыть модальное окно после отправки данных
}

