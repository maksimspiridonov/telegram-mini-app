// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Убедимся, что приложение готово перед редиректом
tg.ready();

// Промокод, который будет скопирован
const promoCode = "6fgw";

// URL партнера
const partnerUrl = "https://1warlo.top/casino/list/4?p=" + promoCode;

// Функция для копирования промокода
function copyPromoCode() {
    navigator.clipboard.writeText(promoCode).then(() => {
        // После успешного копирования перенаправляем на сайт партнера
        tg.openLink(partnerUrl);
    }).catch(err => {
        console.error("Failed to copy promo code: ", err);
    });
}

// Добавляем обработчик для кнопки
document.getElementById("copyButton").addEventListener("click", copyPromoCode);
