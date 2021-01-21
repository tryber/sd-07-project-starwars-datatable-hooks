const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchStarWarsPlanets = async () => {
  try {
    const request = await fetch(endPoint);
    const response = await request.json();
    return response;
  } catch (error) {
    return error;
  }
};

export default fetchStarWarsPlanets;
