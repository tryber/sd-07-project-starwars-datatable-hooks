const planetsAPI = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const responseJSON = await response.json();
  const planets = await responseJSON.results;
  const newPl = planets.map((planet) => {
    const processedPl = planet;
    processedPl.diameter = parseFloat(planet.diameter);
    processedPl.population = parseFloat(planet.population);
    processedPl.rotation_period = parseFloat(planet.rotation_period);
    processedPl.orbital_period = parseFloat(planet.orbital_period);
    processedPl.surface_water = parseFloat(planet.surface_water);
    return processedPl;
  });
  console.log(newPl);
  return newPl;
};

export default planetsAPI;
