const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsFetch = () => new Promise((resolve, reject) => {
  fetch(url)
    .then((response) => response.json().then((data) => resolve(data.results)))
    .catch((error) => reject(error));
});

export default getPlanetsFetch;
