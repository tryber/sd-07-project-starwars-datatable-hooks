import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import SecondoFilter from './SecondFilter';

function FormHeader() {
  const { setFilterByName,
    setDataFilter,
    data,
    filterName,
    setBackFilterName,
    sortTag,
    sortOption,
    setSortTag,
    setSortOption,
    sorted,
    dataFilter,
    sortStatus,
    setSortStatus,
    setfilters,
    filters,
  } = useContext(StarWarsContext);

  const handlerChangeName = ({ target }) => {
    setFilterByName(target.value);
  };

  const changeTagSort = ({ target }) => {
    setSortTag(target.value);
  };

  const confirmSort = () => {
    setSortStatus(!sortStatus);
    setDataFilter(sorted(sortOption, sortTag, dataFilter));
    setfilters({ ...filters, order: { sort: sortOption, column: sortTag } });
  };

  const typeSort = ({ target }) => {
    setSortOption(target.value);
  };

  useEffect(() => {
    setDataFilter(data.filter(
      (planet) => planet.name.toLowerCase().includes(filterName.toLowerCase()),
    ) || []);
  }, [filterName, setDataFilter, data, setBackFilterName]);

  const opttionsSort = ['orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
    'population'];

  return (
    <div>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            data-testid="name-filter"
            type="text"
            onChange={ handlerChangeName }
          />
        </label>
        <select onChange={ changeTagSort } data-testid="column-sort">
          <option value="selecione">Selecione a ordenação</option>
          {opttionsSort.map((item) => (
            <option key={ item } value={ item }>{item}</option>
          ))}
        </select>
        <label htmlFor="asc">
          ASC
          <input
            onChange={ typeSort }
            name="sort"
            value="ASC"
            data-testid="column-sort-input-asc"
            id="asc"
            type="radio"
          />
        </label>
        <label htmlFor="desc">
          DESC
          <input
            onChange={ typeSort }
            name="sort"
            value="DESC"
            data-testid="column-sort-input-desc"
            id="desc"
            type="radio"
          />
        </label>
        <button
          onClick={ confirmSort }
          data-testid="column-sort-button"
          type="button"
        >
          Ordernar
        </button>
      </form>

      <SecondoFilter />
    </div>
  );
}

export default FormHeader;
