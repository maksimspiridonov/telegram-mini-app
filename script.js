// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Расширяем приложение на полный экран
tg.expand();

// Логика кнопки открытия партнерского сайта
document.getElementById('openSite').addEventListener('click', () => {
    tg.openLink('https://your-partner-site.com');
});

// Выводим информацию о пользователе (для примера)
console.log('User:', tg.initDataUnsafe.user);
