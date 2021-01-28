const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const apiFetch = async () => {
  const data = await (await fetch(endpoint)).json();
  return data.results;
};

export default apiFetch;
