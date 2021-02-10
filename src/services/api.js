const urlPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPIPlanets = async () => {
  try {
    const request = await fetch(urlPlanets);
    const { results } = await request.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPIPlanets;
