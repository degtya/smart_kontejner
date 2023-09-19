document.addEventListener('DOMContentLoaded', function () {
    const answerInput = document.getElementById("answer");
    const totalCapacityInput = document.getElementById('totalCapacity');
    const totalWaterVolumeInput = document.getElementById('totalWaterVolume');
    const totalCapacityPlaceholder = 'Uveďte, jaké maximální množství (hmotnost) plynu chcete uskladnit';
    const totalWaterVolumePlaceholder = 'Požadujete-li určitý vodní objem';

    totalCapacityInput.addEventListener('input', function () {
        const placeholderText = 'bude spočítán podle vybrané kapacity';

        if (this.value !== '') {
            totalWaterVolumeInput.style.visibility = 'hidden'; // Скрываем элементы ввода
            totalWaterVolumeInput.nextElementSibling.style.visibility = 'hidden'; // Скрываем единицы измерения
            totalWaterVolumeInput.value = ''; // Очищаем его значение
            totalWaterVolumeInput.setAttribute('placeholder', placeholderText); // Устанавливаем текст placeholder
            
            console.log('placehoder', placeholderText);

            // Скрываем вопрос и описание
            const questionContainer = totalWaterVolumeInput.closest('.input-container');
            const question = questionContainer.querySelector('.question');
            question.style.display = 'none';
            questionContainer.querySelector('.description').style.display = 'none';
        } else {
            totalWaterVolumeInput.style.visibility = 'visible'; // Показываем элементы ввода
            totalWaterVolumeInput.nextElementSibling.style.visibility = 'visible'; // Показываем единицы измерения
            totalWaterVolumeInput.removeAttribute('placeholder'); // Удаляем текст placeholder

            // Восстанавливаем вопрос и описание
            const questionContainer = totalWaterVolumeInput.closest('.input-container');
            const question = questionContainer.querySelector('.question');
            question.style.display = 'block';
            questionContainer.querySelector('.description').style.display = 'block';
        }
    });

 
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

  
