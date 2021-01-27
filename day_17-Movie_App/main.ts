const API_URL: string =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=19ccf6ae4e8e6cee938c90c60ebe4670&page=1';

const IMG_PATH: string = 'https://image.tmdb.org/t/p/w500';

const SEARCH_API: string =
  'https://api.themoviedb.org/3/search/movie?api_key=19ccf6ae4e8e6cee938c90c60ebe4670&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');

//  Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = search.value;

  if (search && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
