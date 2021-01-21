const PLANET_API = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';

const getPlanet = async () => {
  try {
    const response = await fetch(`${PLANET_API}`);
    const data = await response.json();
    const planets = data.results;
    return planets;
  } catch (error) {
    return error;
  }
};

export default getPlanet;
