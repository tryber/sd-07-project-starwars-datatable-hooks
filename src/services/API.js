const fetchPlanets = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export default fetchPlanets;
