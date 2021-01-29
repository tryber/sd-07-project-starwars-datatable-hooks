const starWarsApi = async () => {
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchApi = await fetch(endPoint);
  const data = await fetchApi.json();
  return data.results;
};

export default starWarsApi;
