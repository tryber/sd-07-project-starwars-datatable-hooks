const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getWords = async () => {
  const response = await fetch(END_POINT);
  const data = await response.json();
  return data.results;
};

export default getWords;
