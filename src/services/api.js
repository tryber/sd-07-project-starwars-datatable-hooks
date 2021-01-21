export default async function api() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const result = await fetch(url);
  const response = await result.json();
  return response;
}
