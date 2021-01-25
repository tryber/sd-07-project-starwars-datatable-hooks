import { useContext } from 'react';
import { StarWarsContext } from '../context';

export default function useColumnsKeys(filters = []) {
  const { data: { planets } } = useContext(StarWarsContext);
  if (!planets.length) return;
  const keys = Object.keys(planets[0]).filter((key) => !filters.includes(key));
  return keys;
}
