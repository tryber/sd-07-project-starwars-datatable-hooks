import React, { useContext, useState } from 'react';
import { Context } from '../context/StarWarsProvider';
import CardFilter from './CardFilter';

/** FONTES: https://pt-br.reactjs.org/docs/faq-ajax.html
 *  https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd */

const Table = () => {
  const { data, planetsLoaded, filters, tableHeader,
    setFilters, copyData, setCopyData, applyFilters } = useContext(Context);
  const backSpace = 8;
  const del = 46;
  let tecla = '';

  const [column, setColumn] = useState('population');
  const [comparison, setComparason] = useState('maior que');
  const [num, setNum] = useState('');
  const [search, setSearch] = useState('');

  if (!planetsLoaded) {
    return (<div>Loading...</div>);
  }

  function handleInput({ target }) {
    const { value } = target;
    let newData;
    setFilters({ ...filters, filterByName: { name: value } });
    setSearch(value);

    if (value === '' || tecla === backSpace || tecla === del) {
      newData = data.filter((item) => item.name.includes(value));
    } else {
      newData = copyData.filter((item) => item.name.includes(value));
    }
    setCopyData(newData);
  }

  function onKeyDown({ keyCode }) {
    tecla = keyCode;
  }

  function handleChange({ target }) {
    const { name, value } = target;
    if (name === 'column') setColumn(value);
    if (name === 'comparison') setComparason(value);
    if (name === 'num') setNum(value);
  }

  function handleFilters() {
    applyFilters(column, comparison, num);
  }

  return (
    <div>
      <label htmlFor="search">
        <input
          name="search"
          value={ search }
          placeholder="search"
          data-testid="name-filter"
          onChange={ (e) => handleInput(e) }
          onKeyDown={ onKeyDown }
        />
      </label>
      <select name="column" data-testid="column-filter" onChange={ handleChange }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select name="comparison" data-testid="comparison-filter" onChange={ handleChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="num"
        type="number"
        value={ num }
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilters }
      >
        Aplicar Filtro
      </button>
      <CardFilter />
      <table border="1">
        <thead>
          <tr>
            {tableHeader.map((item, index) => (<th key={ index }>{ item }</th>))}
          </tr>
        </thead>
        <tbody>
          {copyData.map((row, index) => (
            <tr key={ index }>
              {Object.values(row).map((item, i) => (<td key={ i }>{ item }</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
