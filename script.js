// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Убедимся, что приложение готово
tg.ready();

// Промокод, который будет скопирован
const promoCode = "6fgw";

// URL партнера
const partnerUrl = "https://1warlo.top/casino/list/4?p=" + promoCode;

// Функция для копирования промокода
function copyPromoCode() {
    // Копируем промокод в буфер обмена
    navigator.clipboard.writeText(promoCode).then(() => {
        // Информируем пользователя о том, что промокод скопирован
        alert("Promo code copied: " + promoCode);

        // Открываем ссылку партнера внутри Telegram Web App
        tg.openLink(partnerUrl);
    }).catch(err => {
        console.error("Failed to copy promo code: ", err);
    });
}

// Добавляем обработчик для кнопки
document.getElementById("copyButton").addEventListener("click", copyPromoCode);
