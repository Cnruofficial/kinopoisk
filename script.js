// Поиск с перенаправлением
document.querySelector('.search-bar button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value;
    if (query) {
        window.location.href = `https://www.cnruofficial.online/search?q=${encodeURIComponent(query)}`;
    }
});
