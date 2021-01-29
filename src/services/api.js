const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = () => fetch(url)
  .then((response) => response.json());

export default fetchPlanets;
