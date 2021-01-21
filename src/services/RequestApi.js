const RequestApi = async () => {
  try {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url);
    const objJson = response.json();
    return objJson;
  } catch (error) {
    return error;
  }
};

export default RequestApi;
