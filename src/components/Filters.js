import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import orderFunction from '../services/orderFunction';

function Filters() {
  const {
    filters,
    setFilters,
    setData,
    data,
  } = useContext(StarWarsContext);
  const { filterByNumericValues, order } = filters;
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

  const handleColumn = ({ target }) => {
    setFilters(
      { ...filters,
        order: {
          ...order,
          column: target.value,
        },
      },
    );
  };

  const handleSort = ({ target }) => {
    setFilters(
      { ...filters,
        order: {
          ...order,
          sort: target.value,
        },
      },
    );
  };

  const numericFilter = () => {
    setFilters(
      { ...filters,
        filterByNumericValues: [
          ...filterByNumericValues,
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
          <button
            onClick={ numericFilter }
            type="button"
            data-testid="button-filter"
          >
            Filtrar
          </button>
        </div>
        <div>
          <select onChange={ handleColumn } data-testid="column-sort">
            <option value="name">name</option>
            <option value="climate">climate</option>
            <option value="created">created</option>
            <option value="diameter">diameter</option>
            <option value="edited">edited</option>
            <option value="films">films</option>
            <option value="gravity">gravity</option>
            <option value="orbital_period">orbital_period</option>
            <option value="population">population</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
            <option value="terraim">terrain</option>
            <option value="population">url</option>
          </select>
          <div>
            { /* https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/302#issuecomment-360873597 */}
            <label htmlFor="ASC">
              ASC
              <input
                onClick={ handleSort }
                type="radio"
                data-testid="column-sort-input-asc"
                value="ASC"
                id="ASC"
              />
            </label>
            <label htmlFor="DESC">
              DESC
              <input
                onClick={ handleSort }
                type="radio"
                data-testid="column-sort-input-desc"
                value="DESC"
                id="DESC"
              />
            </label>
          </div>
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={() => orderFunction(data, setData, order) }
          >
            Ok
          </button>
        </div>
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
