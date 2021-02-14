const fetchPlanets = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(endpoint).then((response) => response.json());
  results.map((planet) => delete planet.residents);
  return results;
};

export default fetchPlanets;
