async function RequestAPI() {

  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
  .then(response => response.JSON())
  response.json().then(
    (data) => {return data},
    (error) => {return error},
  )}

export default RequestAPI;
