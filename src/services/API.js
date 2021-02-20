const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const starWarsApi = async () => {
  const { results } = await fetch(url).then((response) => response.json());
  return results;
};

export default starWarsApi;
