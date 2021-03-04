import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, setData, filters, setFilters } = useContext(StarWarsContext);

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      ).then((response) => response.json());
      results.map((planet) => delete planet.residents);
      setData(results);
    }
    fetchData();
  });

  function handleChangeName({ target }) {
    setFilters({ filters: { filterByName: { name: target.value } } });
  }

  function renderTableBody(planet) {
    const tableReturn = Object.values(planet).map((element, index) => (
      <td key={ index }>{ element }</td>
    ));
    const { name } = filters.filters.filterByName;

    const lower = tableReturn[0].props.children.toLocaleLowerCase();
    if (lower.includes(name.toLocaleLowerCase()) || name === '') {
      return tableReturn;
    }
  }

  return (
    <div>
      <label htmlFor="filter-text">
        Filtro:
        <input
          type="text"
          name="filter-text"
          data-testid="name-filter"
          value={ filters.filters.filterByName.name }
          onChange={ handleChangeName }
        />
      </label>
      {data === undefined ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((element, index) => (
                <th key={ index }>{ element }</th>
              ))}
            </tr>
          </thead>
          <tbody>
            { data.map((item, index) => (
              <tr key={ index }>{ renderTableBody(item) }</tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
