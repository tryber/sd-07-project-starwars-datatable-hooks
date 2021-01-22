const fetchApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const resultApi = await fetch(url)
    .then((response) => response.json())
    .then((response) => response.results);
  return resultApi;
};

export default fetchApi;
