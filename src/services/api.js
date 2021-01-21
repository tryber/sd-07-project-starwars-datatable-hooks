const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  const fetchApi = await fetch(url).then((response) => response.json());
  return fetchApi.results;
}

export default fetchPlanets;
