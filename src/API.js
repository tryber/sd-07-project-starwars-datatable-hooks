const URL = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';

const fetchAPI = async () => {
  const data = await fetch(URL).then((response) => response.json());
  data.results.forEach((result) => delete result.residents);
  return data;
};

export default fetchAPI;
