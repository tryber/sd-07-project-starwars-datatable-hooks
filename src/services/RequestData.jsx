const RequestData = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  try {
    const promisse = await fetch(URL);
    const result = promisse.json();
    return result;
  } catch (err) { return 'Erro'; }
};

export default RequestData;
