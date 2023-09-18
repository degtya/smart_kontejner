document.addEventListener('DOMContentLoaded', function () {
    const questionContainers = document.querySelectorAll('.input-container');

    questionContainers.forEach(container => {
        const question = container.querySelector('.question label').textContent.trim();
        const response = container.querySelector('.response');
        const hiddenInput = container.querySelector('input[type="hidden"]');
        const optionButtons = container.querySelectorAll('.option-button');

        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const selectedValue = button.getAttribute('data-value');
                hiddenInput.value = selectedValue;

                // Подсветите выбранный вариант ответа
                optionButtons.forEach(btn => {
                    btn.classList.remove('selected');
                });
                button.classList.add('selected');

                // Выведите выбранный вопрос и ответ в консоль (для проверки)
                console.log('Вопрос:', question);
                console.log('Ответ:', selectedValue);
            });
        });
    });
});
