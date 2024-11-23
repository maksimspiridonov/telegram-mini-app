// Telegram Web App API initialization
const tg = window.Telegram.WebApp;

// Промокод и URL партнера
const promoCode = "6fgw";
const partnerUrl = "https://1warlo.top/casino/list/4?p=" + promoCode;

// Расширяем приложение на полный экран
tg.expand();

// Копируем промокод и перенаправляем
function copyPromoCode() {
    navigator.clipboard.writeText(promoCode).then(() => {
        alert("Promo code copied: " + promoCode);
        window.location.href = partnerUrl; // Перенаправляем на сайт
    }).catch(err => {
        console.error("Failed to copy promo code: ", err);
    });
}

// Назначаем обработчик события
document.getElementById("copyButton").addEventListener("click", copyPromoCode);
