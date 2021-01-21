export const fetchPlanetList = async () => {
  const data = fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((resolve) => (resolve.json()))
    .then((list) => (list.results));
  return data;
};

export default fetchPlanetList;
