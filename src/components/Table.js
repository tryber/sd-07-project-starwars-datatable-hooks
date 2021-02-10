import React, { useContext } from 'react';
import { Context } from '../context/StarWarsProvider';

/** FONTES: https://pt-br.reactjs.org/docs/faq-ajax.html
 *  https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd */

const Table = () => {
  const { data, planetsLoaded,
    setFilters, filters,
    copyData, setCopyData } = useContext(Context);
  const { name: search } = filters.filterByName;
  const backSpace = 8;
  const del = 46;
  let tecla = '';

  if (!planetsLoaded) {
    return (<div>Loading...</div>);
  }

  function handleInput({ target }) {
    const { value } = target;
    let newData;
    const filter = { filterByName: { name: value } };
    setFilters(filter);

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
      <table border="1">
        <thead>
          <tr>
            {Object.keys(copyData[0])
              .map((item, index) => (<th key={ index }>{ item }</th>))}
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
