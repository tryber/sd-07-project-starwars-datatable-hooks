const STAR_WARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getStarWarsDataAPI = async () => {
  const dataRequest = await fetch(STAR_WARS_API);
  const dataJson = await dataRequest.json();
  return dataJson;
};

export default getStarWarsDataAPI;
