export default function starWarsAPI() {
  const adress = 'https://swapi-trybe.herokuapp.com/api/planets/';
  return fetch(adress)
    .then((data) => data.json())
    .then((data) => data.results)
    .catch((e) => ` deu milho ${e}`);
}
