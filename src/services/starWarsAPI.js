const starWarData = async () => {
  const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const  request = await fetch(API_URL);
  const response = await request.json();
  return response;
};

export default starWarData;
