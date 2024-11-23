// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Расширяем приложение на полный экран
tg.expand();

// URL партнера
const partnerUrl = "https://1warlo.top/casino/list/4?p=6fgw";

// Перенаправление пользователя на сайт партнера
function redirectToPartner() {
    tg.openLink(partnerUrl); // Используем Telegram API для открытия ссылки
}

// Автоматическое перенаправление через 1 секунду
setTimeout(redirectToPartner, 1000);

// Логика кнопки на случай, если автоматическое перенаправление не сработало
document.getElementById("openSite").addEventListener("click", redirectToPartner);
