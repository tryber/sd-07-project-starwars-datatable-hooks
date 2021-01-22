const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const response = await fetch(URL_API);
  const data = response.json();
  return data;
};

export default getPlanets;
