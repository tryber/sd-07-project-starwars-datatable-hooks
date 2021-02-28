const fetchApi = () => fetch('https://swapi-trybe.herokuapp.com/api/planets/')
  .then((results) => results.json())
  .then((data) => data.res);

export default fetchApi;
