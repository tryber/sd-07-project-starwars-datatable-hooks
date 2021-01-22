import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const ListFilter = () => {
  const {
    state: { data: arrayPlanets },
  } = useContext(StarWarsContext);

  const { dispatch } = useContext(StarWarsContext);

  const {
    state: { order: sortOpt },
  } = useContext(StarWarsContext);

  const changeSort = ({ target }) => {
    const { value, name } = target;
    dispatch({ type: 'SET_SORT', field: name, value });
  };

  const ZERO = 0;
  if (arrayPlanets.length === ZERO) {
    return null;
  }

  const categories = Object.keys(arrayPlanets[0]).filter(
    (elem) => elem !== 'residents',
  );

  return (
    <div>
      <select
        data-testid="column-sort"
        value={ sortOpt.column }
        name="column"
        onChange={ changeSort }
      >
        {categories.map((category) => (
          <option key={ `${category}-sort` } value={ category }>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="column-sort-input-asc">
        Ascendente
        <input
          value="ASC"
          id="column-sort-input-asc"
          type="radio"
          name="sort"
          checked={ sortOpt.sort === 'ASC' }
          data-testid="column-sort-input-asc"
          onChange={ changeSort }
        />
      </label>
      <label htmlFor="column-sort-input-desc">
        Descendente
        <input
          value="DESC"
          id="column-sort-input-desc"
          type="radio"
          name="sort"
          checked={ sortOpt.sort === 'DESC' }
          data-testid="column-sort-input-desc"
          onChange={ changeSort }
        />
      </label>
      <button type="button" data-testid="column-sort-button">
        Ordenar
      </button>
    </div>
  );
};

export default ListFilter;
