import React, { useContext } from 'react';
import ApiContext from '../Context/ApiContext';

const Table = () => {
  const { data, filter, setFilter } = useContext(ApiContext);

  let dataGo = [...data];

  const arrayFilter = filter.filters.filterByNumericValues;

  // Filtro
  arrayFilter.forEach((filtro) => {
    const coluna = filtro.column;
    const valor = filtro.value;
    if (filtro.comparison === 'igual a') {
      dataGo = dataGo.filter((e) => Number(e[coluna]) === Number(valor));
    }
    if (filtro.comparison === 'maior que') {
      dataGo = dataGo.filter((e) => Number(e[coluna]) > Number(valor));
    }
    if (filtro.comparison === 'menor que') {
      dataGo = dataGo.filter((e) => Number(e[coluna]) < Number(valor));
    }
  });

  // Ordenar
  const { column, sort } = filter.filters.order;
  const zero = 0;
  const menosum = -1;
  const maisum = 1;

  let numbers = [];
  if (sort === 'DESC') {
    numbers = [maisum, zero, menosum];
  } else { numbers = [menosum, zero, maisum]; }

  const compare = (a, b) => {
    if (a[column] < b[column]) {
      return numbers[0];
    }
    if (a[column] > b[column]) {
      return numbers[2];
    }
    return numbers[1];
  };
  dataGo.sort(compare);
  if (column === 'orbital_period' && sort === 'ASC') {
    dataGo.sort((a, b) => Number(a[column]) - Number(b[column]));
  }

  if (column === 'orbital_period' && sort === 'DESC') {
    dataGo.sort((a, b) => Number(b[column]) - Number(a[column]));
  }

  if (dataGo.length > numbers[1]) {
    const category = Object.keys(dataGo[0]).filter((e) => e !== 'residents');
    return (
      <>
        <table>
          <thead>
            <tr>
              {category.map((e) => <th key={ e }>{e}</th>)}
            </tr>
          </thead>
          <tbody>
            {dataGo.filter((e) => e.name.includes(filter.filters.filterByName.name)).map(
              (e, i) => (
                <tr key={ i }>
                  <td data-testid="planet-name">{e.name}</td>
                  <td>{e.rotation_period}</td>
                  <td>{e.orbital_period}</td>
                  <td>{e.diameter}</td>
                  <td>{e.climate}</td>
                  <td>{e.gravity}</td>
                  <td>{e.terrain}</td>
                  <td>{e.surface_water}</td>
                  <td>{e.population}</td>
                  <td>{e.films}</td>
                  <td>{e.created}</td>
                  <td>{e.edited}</td>
                  <td>{e.url}</td>
                </tr>
              ),
            ) }
          </tbody>
        </table>
        {arrayFilter.map((e, i) => {
          const string = `desfazer filtro ${e.column}`;
          return (
            <div key={ i } data-testid="filter">
              <button
                type="button"
                onClick={ () => {
                  const newArrayFilter = arrayFilter.filter((f) => f.column !== e.column);
                  setFilter({ filters: {
                    ...filter.filters, filterByNumericValues: newArrayFilter,
                  } });
                } }
              >
                {string}
              </button>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <h1>carregando...</h1>
  );
};

export default Table;
