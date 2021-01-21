const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = () => {
  fetch(BASE_URL)
    .then((response) => response.json()
      .then((json) => json.results));
};

export default fetchPlanets;
