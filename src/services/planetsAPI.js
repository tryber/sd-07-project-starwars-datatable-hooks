const planetsAPI = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchResponse = await fetch(URL);
  const JSONResponse = await fetchResponse.json();
  return JSONResponse;
};

export default planetsAPI;
