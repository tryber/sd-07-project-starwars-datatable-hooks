import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const zero = 0;
  const menosUm = -1;
  const [elements, setElements] = useState([]);
  const [coluna, setColuna] = useState('');
  const [comp, setComparador] = useState('');
  const [num, setSearchValue] = useState(zero);
  const { context, setContext } = useContext(StarWarsContext);
  const { planetList, filters } = context;
  const { filterByNumericValues } = filters;

  const renderPreviousFilters = () => {
    return filterByNumericValues.map((item) => {
      return (
        <div key={item.column} data-testid='filter' className="filters">
          <h5> {item.column} {item.comparison} {item.value}</h5>
          <button className="button" id={item.column} onClick={({target}) => deleteFilter(target)}>X</button>
        </div>
      )
    })
  }

  const deleteFilter = (target) => {
    const list = filterByNumericValues.filter(item => item.column !==target.id)
    setContext({...context, filters: {...filters, filterByNumericValues: list}})
  }

  function renderTable(param) {
    let list = param;
    console.log(filterByNumericValues.length);
    if (filterByNumericValues.length > zero) {
      filterByNumericValues.forEach((item) => {
        list = list.filter((subItem) => {
          switch (item.comparison) {
            case 'maior que':
              return parseInt(subItem[item.column], 10) > parseInt(item.value, 10);
            case 'menor que':
              return parseInt(subItem[item.column], 10) < parseInt(item.value, 10);
            case 'igual a':
              return parseInt(subItem[item.column], 10) === parseInt(item.value, 10);
            default:
              return false;
          }
        });
      });
    }

    const elementList = list.map((planet) => {
      const {
        climate,
        created,
        diameter,
        edited,
        films,
        gravity,
        name,
        terrain,
        url,
        population,
      } = planet;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{planet.orbital_period}</td>
          <td>{population}</td>
          <td>{planet.rotation_period}</td>
          <td>{climate}</td>
          <td>{created}</td>
          <td>{diameter}</td>
          <td>{edited}</td>
          <td>{films}</td>
          <td>{gravity}</td>
          <td>{planet.surface_water}</td>
          <td>{terrain}</td>
          <td>{url}</td>
        </tr>
      );
    });
    setElements(elementList);
  };

  useEffect(() => {
    renderTable(planetList);
  }, [planetList, filterByNumericValues]);

  const handleClick = () => {
    setContext({
      ...context,
      filters: {
        ...filters,
        filterByNumericValues: [
          ...context.filters.filterByNumericValues, {
            column: coluna, comparison: comp, value: num,
          }],
      },
    });
  };

  const changeHandler = (target) => {
    const filtered = planetList.filter((item) => item.name.includes(target.value));
    renderTable(filtered);
  };

  const renderOptions = (list, whichOne) => {
    filterByNumericValues.forEach((item) => {
      const index = list.indexOf(item[whichOne]);
      if (index > menosUm) list.splice(index, 1);
    });
    return list.map((item, index) => (
      <option key={index} name={item} id={item}>{item}</option>
    ));
  };

  return (
    <div>
      <div>
        Previous Filters:
        {renderPreviousFilters()}
      </div>
      <div>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            name="search"
            data-testid="name-filter"
            placeholder="Digite aqui"
            onChange={({ target }) => changeHandler(target)}
          />
        </label>
        <label htmlFor="class_selection">
          <select
            id="class_selection"
            name="class_selection"
            data-testid="column-filter"
            onChange={({ target }) => setColuna(target.value)}
          >
            {renderOptions(
              ['population',
                'orbital_period',
                'diameter',
                'rotation_period',
                'surface_water'],
              'column',
            )}
          </select>
        </label>
        <label htmlFor="comp">
          <select
            id="comp"
            name="comp"
            data-testid="comparison-filter"
            onChange={({ target }) => setComparador(target.value)}

          >
            {renderOptions(['maior que', 'menor que', 'igual a'], 'comparison')}
          </select>
        </label>
        <label htmlFor="search_value">
          <input
            type="number"
            id="search_value"
            name="search_value"
            data-testid="value-filter"
            onChange={({ target }) => setSearchValue(target.value)}
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => handleClick()}
        >
          Filtrar
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Rotation_period</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
