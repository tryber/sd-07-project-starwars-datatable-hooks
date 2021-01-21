const fetchPlanets = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url)
    .then(
      (data) => (data.json()),
      (error) => (error),
    );
  return (response);
};

export default fetchPlanets;
