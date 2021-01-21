const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = () => fetch(url)
  .then((response) => response.json());

const filteredPlanets = (filtered) => fetch(`https://swapi-trybe.herokuapp.com/api/planets/?search=${filtered}`)
  .then((response) => response.json());

export { fetchPlanets, filteredPlanets };
