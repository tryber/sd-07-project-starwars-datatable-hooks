const STAR_WARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
// const API = 'https://pokeapi.co/api/v2/pokemon?limit=5';

const getPlanets = async () => {
// (
//   fetch(`${STAR_WARS_API}`)
//     .then((response) => (
//       response
//         .json()
//         .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
//     ))
// );
  const response = await fetch(STAR_WARS_API);
  // const response = await fetch(API);
  const data = await response.json();
  // console.log(data.results);
  return data.results;
};
export default getPlanets;
