const fetchApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(url);
  const response = await request.json();
  return response.results;
};

export default fetchApi;
