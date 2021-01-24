import { useContext } from 'react';
import { StarWarsContext } from '../context';

const compare = (a, b, simbol) => {
  switch (simbol) {
  case 'maior que':
    return (+a > +b);
  case 'menor que':
    return (+a < +b);
  case 'igual a':
    return (+a === +b);
  default:
    return null;
  }
};

export default function useFilterPlanets() {
  const {
    data: { planets },
    filters: {
      filterByName: { name },
      filterByNumericValues,
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

  return newPlanets;
}
