const PLANET_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanet = async () => {
  try {
    const response = await fetch(`${PLANET_API}`);
    const data = await response.json();
    const planets = data.results;
    return planets;
  } catch (error) {
    return error;
  }
};

export default getPlanet;
/* export const getMovie = (films) => {
    let movies = [];
    films.forEach( async (element) => {
        try {
            const response = await fetch(`${element}`);
            const data = await response.json();
            movies.push(data)
        } catch (error) {
          return error;
        }
    });
return movies
} */
