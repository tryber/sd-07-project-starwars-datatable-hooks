const URL = 'https://swapi-trybe.herokuapp.com/';

const getPlanets = async () => {
  const endpoint = `${URL}api/planets/`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export default getPlanets;
