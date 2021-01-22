const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
const ServiceAPI = () => async () => {
  const response = (await fetch(endPoint)).json();
  return response;
};

export default ServiceAPI;
