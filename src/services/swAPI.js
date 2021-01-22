const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getPlanets() {
  const requestResponse = await fetch(ENDPOINT)
    .then((response) => response.json()
      .then((data) => data.results));
  return requestResponse;
}

export default getPlanets;
