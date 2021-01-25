const PLANETS_API = "https://swapi-trybe.herokuapp.com/api/planets/";
// Alexandre Faustino

const planets = async () => {
  try {
    const { results } = await fetch(PLANETS_API)
      .then((response) => response.json());
    return results;
  } catch (error) {
    return error;
  }
};

export default planets;
