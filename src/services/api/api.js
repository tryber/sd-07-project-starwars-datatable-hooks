export default async function getAPI() {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await result.json();
  return data.results.sort((a, b) => a.name.localeCompare(b.name));
}
