async function fetchAPI() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export default fetchAPI;

// Estava demorando para acertar o fetch com o .then então acabei procurando como fazer com async/await:
// https://dmitripavlutin.com/javascript-fetch-async-await/
