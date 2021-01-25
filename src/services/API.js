const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  try {
    const { results } = await fetch(URL)
      .then((response) => response.json());
    return results;
  } catch (error) {
    return error;
  }
};

export default getPlanets;
