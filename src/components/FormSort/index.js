import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const FormSort = () => {
  const {
    columnSort,
    valueSort,
    data,
    changeFilter,
    updateSort,
  } = useContext(StarWarsContext);

  return (
    <form>
      <select
        name="columnSort"
        value={ columnSort }
        data-testid="column-sort"
        onChange={ (e) => changeFilter(e) }
      >
        { data && data.length && Object.keys(data[0])
          .map((key) => (
            <option key={ key } value={ key }>{key}</option>
          ))}
      </select>
      <label htmlFor="asc">
        <input
          type="radio"
          id="asc"
          name="valueSort"
          checked={ valueSort === 'ASC' }
          value="ASC"
          data-testid="column-sort-input-asc"
          onChange={ (e) => changeFilter(e) }
        />
        ASC
      </label>
      <label htmlFor="desc">
        <input
          type="radio"
          id="desc"
          name="valueSort"
          checked={ valueSort === 'DESC' }
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={ (e) => changeFilter(e) }
        />
        DESC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ updateSort }
      >
        Aplicar Ordenação
      </button>
    </form>
  );
};

export default FormSort;
