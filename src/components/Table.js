import React, { useState, useContext, useEffect } from 'react';
import Context from '../Context/Context';

const Table = () => {
  const { data, filters } = useContext(Context);
  const [planets, setPlanets] = useState([]);
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState(false);
  const headers = ['climate', 'created', 'diameter',
    'edited', 'films', 'gravity',
    'name', 'orbitalPeriod', 'population',
    'rotationPeriod', 'surfaceWater', 'terrain', 'url'];

  useEffect(() => {
    if (!filtered) {
      setPlanets(data);
    }
  }, [data, filtered, planets]);

  const filterText = () => {
    const { name } = filters.filterByName;
    return planets.filter(
      (planet) => planet.name.toUpperCase().includes(name.toUpperCase()),
    );
  };

  const handleChangeInput = ({ target }) => {
    filters.filterByName.name = target.value;
    setInput(target.value);
  };

  const handleChangeOptions = ({ target }) => {
    const { className, value } = target;
    let positionArr;
    if (filtered) {
      positionArr = 1;
    } else {
      positionArr = 1 - 1;
    }
    if (className === 'column-filter') {
      filters.filterByNumericValues[positionArr].column = value;
    }

    if (className === 'comparison-filter') {
      filters.filterByNumericValues[positionArr].comparison = value;
    }

    if (className === 'value-filter') {
      filters.filterByNumericValues[positionArr].value = value;
    }
  };

  const spliceList = () => {
    const values = filters.filterByNumericValues[0];
    const { column } = values;
    const list = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    const index = list.indexOf(column);
    list.splice(index, 1);
    return list;
  };

  const addFilter = () => {
    const [first, second] = filters.filterByNumericValues;
    let { column, comparison, value } = first;
    if (filtered) {
      ({ column, comparison, value } = second);
    }
    if (comparison === 'maior que') {
      setPlanets(planets.filter((planet) => parseInt(planet[column], 10) > value));
    }
    if (comparison === 'menor que') {
      setPlanets(planets.filter((planet) => parseInt(planet[column], 10) < value));
    }

    if (comparison === 'igual a') {
      setPlanets(planets.filter((planet) => planet[column] === value));
    }
    setFiltered(true);
  };

  const verifyCondition = () => {
    if (input !== '') {
      return filterText();
    }
    return planets;
  };

  const mapPlanets = (parameters) => parameters.map(({ climate,
    created,
    diameter,
    edited,
    films,
    gravity,
    name,
    orbital_period: orbitalPeriod,
    population,
    rotation_period: rotationPeriod,
    surface_water: surfaceWater,
    terrain,
    url,
  }) => (
    <tr key={ name }>
      <td>{ climate }</td>
      <td>{ created }</td>
      <td>{ diameter }</td>
      <td>{ edited }</td>
      <td>
        {films.map((filme) => (
          <p key={ filme }>{ filme }</p>
        ))}
      </td>
      <td>{ gravity }</td>
      <td>{ name }</td>
      <td>{ orbitalPeriod }</td>
      <td>{ population }</td>
      <td>{ rotationPeriod }</td>
      <td>{ surfaceWater }</td>
      <td>{ terrain }</td>
      <td>{ url }</td>
    </tr>
  ));

  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={
          (target) => handleChangeInput(target)
        }
      />
      <select
        className="column-filter"
        onChange={ (obj) => handleChangeOptions(obj) }
        data-testid="column-filter"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        className="comparison-filter"
        onChange={ (obj) => handleChangeOptions(obj) }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        className="value-filter"
        type="number"
        onChange={ (obj) => handleChangeOptions(obj) }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addFilter() }
      >
        Adicionar filtro
      </button>
      {
        filtered
          ? (
            <div>
              <select
                className="column-filter"
                onChange={ (obj) => handleChangeOptions(obj) }
              >
                {spliceList().map((value) => <option key={ value.id }>{value}</option>)}
              </select>
              <select
                className="comparison-filter"
                onChange={ (obj) => handleChangeOptions(obj) }
              >
                <option>maior que</option>
                <option>menor que</option>
                <option>igual a</option>
              </select>

              <input
                className="value-filter"
                type="number"
                onChange={ (obj) => handleChangeOptions(obj) }
              />
              <button
                type="button"
                onClick={ () => addFilter() }
              >
                Adicionar filtro
              </button>
            </div>)
          : ''
      }
      <table>
        <thead>
          <tr>
            {headers.map((header) => <th key={ header.id }>{header.toUpperCase()}</th>)}
          </tr>
        </thead>
        <tbody>
          {mapPlanets(verifyCondition())}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// Object.keys()
