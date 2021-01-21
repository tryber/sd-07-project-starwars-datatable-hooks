export async function fetchStarWarsApi() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(endpoint).then((data) => data.json());
  return response;
}

export async function fetchStar() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(endpoint).then((data) => data.json());
  return response;
}
