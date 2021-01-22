const STAR_WARS_PLANET = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const response = await fetch(STAR_WARS_PLANET);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const planets = await response.json();
  return planets.results;
};

export default getPlanets;
