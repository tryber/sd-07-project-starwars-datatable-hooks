const getPlanetsList = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchingResult = await fetch(url);
  const expectedPlanetListResult = await fetchingResult.json();
  return expectedPlanetListResult;
};

export default getPlanetsList;
