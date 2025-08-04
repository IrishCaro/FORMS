// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Start coding here...



function topMovieDescription({ title, genre, rating }) {
  return `${title} (${genre}) - ${rating}`;
}

const topMovies = movies.filter(movie => movie.rating >= 8).map(topMovieDescription);
let movieFilter = document.getElementById("top_movie");
movieFilter.textContent = topMovies.join("  ");

function formatMovie({ title, genre, rating }) {
  return `${title} (${genre}) - ${rating} ⭐`;
}

const formattedMovies = movies.map(formatMovie);
document.getElementById('format_movie').textContent = formattedMovies.join("  ");

function recommend(movie, minRating = 8) {
  return movie.rating >= minRating;
}

const recommendedMovies = movies.filter(movie => recommend(movie));

const formatted = recommendedMovies.map(
  ({ title, genre, rating }) => `${title} (${genre}) - ${rating} ⭐`
);

const movierecommend = document.getElementById("recommend_movie");
movierecommend.innerHTML = formatted.join('<br>');
