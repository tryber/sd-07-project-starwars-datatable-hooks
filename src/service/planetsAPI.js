const planetsAPI = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets';

  const response = await fetch(URL);
  const JSONResponse = await response.json();
  return JSONResponse;
};

export default planetsAPI;
