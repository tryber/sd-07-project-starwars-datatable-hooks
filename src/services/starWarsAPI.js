async function starWarsAPI() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const data = await fetch(url).then((response) => response.json());
  const { results } = data;
  return results;
}

export default starWarsAPI;
