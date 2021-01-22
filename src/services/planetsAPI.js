const getPlanets = async () => {
  const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await planets.json().then((response) => response.results);
  return json;
};

export default getPlanets;
