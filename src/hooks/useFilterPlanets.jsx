import { useContext } from 'react';
import { StarWarsContext } from '../context';
import { sortPlanets, compare } from '../services';

export default function useFilterPlanets() {
  const {
    data: { planets },
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order,
    },
  } = useContext(StarWarsContext);

  const filterPlanet = (planet) => {
    if (!filterByNumericValues.length) return true;
    const comparation = filterByNumericValues.every(
      ({ column, value, comparison }) => compare(planet[column], value, comparison),
    );
    return comparation;
  };

  const newPlanets = planets.filter(
    (planet) => planet.name.includes(name) && filterPlanet(planet),
  );

  if (Object.keys(order).length) {
    const { column, sort } = order;
    switch (sort) {
    case 'DESC':
      sortPlanets(newPlanets, column, false);
      break;
    case 'ASC':
      sortPlanets(newPlanets, column, true);
      break;
    default:
      return null;
    }
  }

  return newPlanets;
}
