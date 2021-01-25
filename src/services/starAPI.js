const STAR_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanets = async () => {
  const data = await (await fetch(STAR_API)).json();
  return data.results;
};

export default getPlanets;
