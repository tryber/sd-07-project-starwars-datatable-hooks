const fetchStarWarsPlanet = async () => {
  try {
    const fetchPlanet = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
    const results = await fetchPlanet.json();
    return results;
  } catch (err) {
    console.error('Request faliend');
    alert('Request faliend');
  }
};

export default fetchStarWarsPlanet;
