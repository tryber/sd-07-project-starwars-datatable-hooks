import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const {
    filters,
    setFilters,
    setData,
    data,
  } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const number = 0;
  const [value, setValue] = useState(number);

  const removeFilter = ({ target }) => {
    setFilters({
      ...filters,
      ...filterByNumericValues.splice([target.id], 1),
    });
  };

  const numericFilter = () => {
    setFilters(
      { ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          { column, comparison, value: Number(value) },
        ],
      },
    );
  };

  useEffect(() => {
    filterByNumericValues.forEach((filter) => {
      const { column: a, comparison: b, value: c } = filter;
      const newData = data.results.reduce((acc, curr) => {
        const currentValue = Number(curr[a]);
        switch (b) {
        case 'maior que':
          if (currentValue > c) acc.push(curr);
          break;
        case 'menor que':
          if (currentValue < c) acc.push(curr);
          break;
        default:
          if (currentValue === c) acc.push(curr);
          break;
        }

        return acc;
      }, []);

      setData({ ...data, results: newData });
    });
  }, [filterByNumericValues]);

  return (
    <section>
      <div>
        <select
          onChange={ ({ target }) => {
            setColumn(target.value);
          } }
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <div>
          <select
            onChange={ ({ target }) => {
              setComparison(target.value);
            } }
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
          <input
            onChange={ ({ target }) => {
              setValue(target.value);
            } }
            data-testid="value-filter"
            type="number"
          />
        </div>
        <button
          onClick={ numericFilter }
          type="button"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </div>

      <div>
        {
          filterByNumericValues.map((filter, index) => {
            const { column: a, comparison: b, value: c } = filter;
            return (
              <div key={ index } data-testid="filter">
                <button id={ index } onClick={ removeFilter } type="button">x</button>
                <p>{`${a} ${b} ${c}`}</p>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}

export default Filters;
