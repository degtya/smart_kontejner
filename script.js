document.addEventListener("DOMContentLoaded", function () {
    const optionButtons = document.querySelectorAll(".option-button");
    
    optionButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            optionButtons.forEach(function(btn) {
                btn.classList.remove("selected");
            });
            
            this.classList.add("selected");
            
            const selectedValue = this.getAttribute("data-value");
            // Теперь можно использовать selectedValue для сохранения выбранного значения
            console.log("Выбрано: " + selectedValue);
        });
    });
});
