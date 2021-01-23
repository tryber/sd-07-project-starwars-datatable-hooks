export default async function fetchData() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const results = await fetch(url)
    .then((response) => response.json());
  const planets = results.results;
  planets.map((planet) => delete planet.residents);
  return planets;
}
