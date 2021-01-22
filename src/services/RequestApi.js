const RequestApi = async () => {
  try {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(URL);
    const json = response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export default RequestApi;
