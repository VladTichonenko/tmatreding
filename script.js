document.addEventListener("DOMContentLoaded", () => {
    // Работа с вкладками
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    // Устанавливаем первую вкладку активной по умолчанию
    tabs[0].classList.add("active");
    tabContents[0].classList.add("active");

    // Переключение вкладок
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Сброс активного состояния для всех вкладок и контента
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Установка активного состояния для выбранной вкладки и контента
            tab.classList.add("active");
            const activeTabContent = document.getElementById(`${tab.dataset.tab}-content`);
            activeTabContent.classList.add("active");
        });
    });

    // Работа с боковым меню
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const sideMenu = document.getElementById("side-menu");

    // Открытие и закрытие бокового меню
    hamburgerMenu.addEventListener("click", () => {
        sideMenu.classList.toggle("show");
    });

    // Работа с панелью торговых настроек
    const tradingModePanel = document.getElementById("tradingModePanel");
    const tradingOptionsBlock = document.getElementById("tradingOptionsBlock");
    const closeButton = document.getElementById("closeButton");
    const balanceText = document.getElementById("balanceText");
    const radioButtons = document.querySelectorAll('input[name="tradeMode"]');

    // Показать блок настроек, выдвигая его снизу
    tradingModePanel.addEventListener("click", () => {
        tradingOptionsBlock.classList.toggle("show");
    });

    // Закрыть блок при нажатии кнопки "Закрыть"
    closeButton.addEventListener("click", () => {
        tradingOptionsBlock.classList.remove("show");
    });

    // Обработчик для изменения текста баланса при выборе опции
    radioButtons.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked) {
                if (radio.value === "Game score") {
                    balanceText.textContent = "Game score: 5401¥";
                } else {
                    balanceText.textContent = "$15,392.75"; // Исходное значение
                }
                tradingOptionsBlock.classList.remove("show"); // Закрыть блок после выбора
            }
        });
    });
});



document.getElementById('open-chart').addEventListener('click', function() {
    window.location.href = 'HTML-Crypto-Currency-Chart-Snippets/Chart.html';
});


document.getElementById('open-glav').addEventListener('click', function() {
    window.location.href = 'index1.html';
});


document.getElementById('calk').addEventListener('click', function() {
    window.location.href = 'calk.html';
});

