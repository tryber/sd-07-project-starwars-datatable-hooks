const planetsAPI = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const responseJSON = await response.json();
  const planets = await responseJSON.results;
  return planets;
};

export default planetsAPI;
