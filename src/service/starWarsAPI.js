const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api';

const getPlanets = async () => {
  const response = await fetch(`${ENDPOINT}/planets`);
  const data = await response.json();
  return data;
};

export default getPlanets;
