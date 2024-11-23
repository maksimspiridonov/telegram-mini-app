// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Убедимся, что приложение готово перед редиректом
tg.ready();

// URL партнера
const partnerUrl = "https://1warlo.top/casino/list/4?p=6fgw";

// Функция для редиректа на сайт партнера
function redirectToPartner() {
    tg.openLink(partnerUrl); // Используем Telegram API для открытия ссылки
}

// Автоматическое перенаправление сразу после инициализации
setTimeout(redirectToPartner, 1000);
