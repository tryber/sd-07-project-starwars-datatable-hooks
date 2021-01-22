const getPlanetsApi = async () => {
  const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json());

  return planets.results;
};

export default getPlanetsApi;
