// Поиск с перенаправлением на www.cnruofficial.online
document.querySelector('.search-bar button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value;
    if (query) {
        window.location.href = `https://www.cnruofficial.online/search?q=${encodeURIComponent(query)}`;
    }
});

// Загрузка фильмов (замените на данные с www.cnruofficial.online, если есть API)
const movies = [
    { title: "Фильм 1", genre: "Драма", year: 2025, image: "movie1.jpg" },
    // Добавить больше фильмов
];

const movieGrid = document.querySelector('.movie-grid');
movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>Жанр: ${movie.genre}, ${movie.year}</p>
        <a href="https://www.cnruofficial.online" target="_blank">Смотреть</a>
    `;
    movieGrid.appendChild(card);
});
