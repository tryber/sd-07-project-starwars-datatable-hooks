import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

// Utilização do Context - modelo de estudo { Bruno Sordi }
// Foram feitas observações também  nos códigos do { Pedro Marques }

// Dados da API passado pelo Context
function Table() {
  const {
    data,
    filters,
    setFilters,
  } = useContext(StarWarsContext);

  // Filtro por nome, a cada novo filter, pega o array original e filtra por nome
  function handleChangeName({ target }) {
    const prevFilters = filters;
    setFilters({
      ...prevFilters,
      filterByName: { name: target.value },
    });
  }
  return (
    <div>
      <div>
        <label htmlFor="filter-text">
          Filter By Name:
          <input
            type="text"
            name="filter-text"
            data-testid="name-filter"
            value={ filters.filterByName.name }
            onChange={ handleChangeName }
          />
        </label>
      </div>
      {!data.length ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              { Object.keys(data[0]).map((element, index) => (
                <th key={ index }>{ element }</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, keys) => (
              <tr key={ keys }>
                { Object.values(item).map((element, index) => (
                  <td key={ index }>{ element }</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
