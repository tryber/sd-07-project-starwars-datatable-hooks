const fetchPlanets = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';

  try {
    const response = await fetch(endpoint);
    return response.json();
  } catch (error) {
    return error.response;
  }
};

module.exports = {
  fetchPlanets,
};
