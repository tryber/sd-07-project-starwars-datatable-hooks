import { REQUEST_PLANETS, GET_PLANETS } from '../context/reducers';

const getFetch = (url) => fetch(url).then((element) => element.json());

export default async function fetchPlanets(callback) {
  callback({ type: REQUEST_PLANETS });
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await getFetch(url);
  callback({ type: GET_PLANETS, payload: results });
}
