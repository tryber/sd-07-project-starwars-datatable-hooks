const fetchPlanets = () => fetch('https://swapi-trybe.herokuapp.com/api/planets/')
  .then((resp) => resp.json())
  .then((json) => json);

export default fetchPlanets;
