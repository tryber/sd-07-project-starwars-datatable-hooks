async function handlePlanetStarWars() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const results = await fetch(endpoint);
  const data = await results.json();
  return data;
}

export default handlePlanetStarWars;
