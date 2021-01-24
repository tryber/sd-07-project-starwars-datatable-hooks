export const getPlanet = () => (
  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => (
      response.json().then((json) => console.log(json.results))
    ))
);

export default getPlanet;
