const endpoint = 'https://swapi-trybe.herokuapp.com/api';

const getPlanets = async () => {
  const response = await fetch(`${endpoint}/planets`);
  const data = await response.json();
  return data;
};

export default getPlanets;
