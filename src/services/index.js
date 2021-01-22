async function fetchPlanets(hook) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  const data = await response.json();
  hook(data);
}

export default fetchPlanets;
