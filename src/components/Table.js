import React, { useContext } from 'react';
import { Context } from '../context/StarWarsProvider';

/** FONTES: https://pt-br.reactjs.org/docs/faq-ajax.html
 *  https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd */

const Table = () => {
  const { data, planetsLoaded,
    setFilters, filters, fetchData } = useContext(Context);
  const { name: search } = filters.filterByName;
  if (!planetsLoaded) {
    return (<div>Loading...</div>);
  }
  function handleInput({ target }) {
    const { value } = target;
    const filter = { filterByName: { name: value } };
    setFilters(filter);
    fetchData();
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
        />
      </label>
      <table border="1">
        <thead>
          <tr>
            {Object.keys(data[0])
              .map((item, index) => (<th key={ index }>{ item }</th>))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
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
