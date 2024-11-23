// Промокод, который будет скопирован
const promoCode = "6fgw";

// URL партнера
const partnerUrl = "https://1warlo.top/casino/list/4?p=" + promoCode;

// Функция для копирования промокода и перенаправления на сайт партнера
function copyPromoCode() {
    // Копируем промокод в буфер обмена
    navigator.clipboard.writeText(promoCode).then(() => {
        // Информируем пользователя о том, что промокод скопирован
        alert("Promo code copied: " + promoCode);

        // Перенаправляем на сайт партнера
        window.location.href = partnerUrl;
    }).catch(err => {
        console.error("Failed to copy promo code: ", err);
    });
}

// Добавляем обработчик для кнопки
document.getElementById("copyButton").addEventListener("click", copyPromoCode);
