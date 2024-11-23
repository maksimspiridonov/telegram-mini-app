// Telegram Web App API initialization
const tg = window.Telegram.WebApp;

// Промокод и URL партнера
const promoCode = "6fgw";
const partnerUrl = "https://1warlo.top/casino/list/4?p=" + promoCode;

// Расширяем приложение на полный экран
tg.expand();

// Сразу перенаправляем на партнёрский сайт
window.location.href = partnerUrl;
