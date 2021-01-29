const fetchPlanets = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets';
  const response = await fetch(url);
  const re = await response.json();
  return re.results;
};

export default fetchPlanets;
