import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetsGrid() {
  const {
    planetsData: { results = [] },
    filter: { filters: { filterByName: { name } } },
    filter: { filters: { filterByNumericValue } },
  } = useContext(PlanetsContext);

  const filtersCheck = (planet) => {
    if (name !== '' && !(planet.name.toLowerCase().includes(name.toLowerCase()))) {
      return false;
    }

    const valueCheck = filterByNumericValue.map(({ column, comparison, value }) => {
      const planetValue = parseInt(planet[column], 10);
      const valueFilter = parseInt(value, 10);
      if (planetValue !== 'unknown') {
        switch (comparison) {
        case 'menor que':
          if (planetValue < valueFilter) return true;
          break;
        case 'maior que':
          if (planetValue > valueFilter) return true;
          break;
        default:
          if (planetValue === valueFilter) return true;
          break;
        }
      }
      return false;
    });

    const validArray = (element) => element === true;
    const zero = 0;

    if (valueCheck.length > zero) return valueCheck.every(validArray);

    return true;
  };

  return (
    <tbody>
      {results.map((planet, index) => {
        if (filtersCheck(planet)) {
          return (
            <tr key={ `row+${index}` }>
              {Object.entries(planet).map((object, index2) => {
                if (object[0] !== 'residents') {
                  return (
                    <td key={ `${index}${index2}` }>
                      { object[1] }
                    </td>
                  );
                }
                return null;
              }) }
            </tr>
          );
        }
        return false;
      })}
    </tbody>
  );
}

export default PlanetsGrid;
