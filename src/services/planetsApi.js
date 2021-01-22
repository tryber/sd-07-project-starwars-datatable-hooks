const getCurrencePlanets = (Url) => (
  fetch(Url)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrencePlanets;
