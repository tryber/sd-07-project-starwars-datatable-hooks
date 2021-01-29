import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetsGrid() {
  const {
    planetsData: { results = [] },
    filter: { filters: { filterByName: { name } } },
    filter: { filters: { filterByNumericValue } },
    filter: { filters: { order: { column: columnName, sort } } },
  } = useContext(PlanetsContext);

  const orderSort = () => {
    const ASC = 1;
    const DESC = -1;
    if (sort === 'ASC') {
      results.sort((a, b) => {
        if (columnName === 'name') return a[columnName] > b[columnName] ? ASC : DESC;
        return parseInt(a[columnName], 10) > parseInt(b[columnName], 10) ? ASC : DESC;
      });
    } else {
      results.sort((a, b) => {
        if (columnName === 'name') return a[columnName] > b[columnName] ? DESC : ASC;
        return parseInt(a[columnName], 10) > parseInt(b[columnName], 10) ? DESC : ASC;
      });
    }
    return true;
  };

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
      {orderSort()
        ? results.map((planet, index) => {
          if (filtersCheck(planet)) {
            return (
              <tr key={ `row+${index}` }>
                {Object.entries(planet).map((object, index2) => {
                  if (object[0] !== 'residents') {
                    return (
                      <td
                        key={ `${index}${index2}` }
                        data-testid={ `planet-${object[0]}` }
                      >
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
        }) : null}
    </tbody>
  );
}

export default PlanetsGrid;
