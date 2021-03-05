import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = React.useState([]);
  const [origin, setOrigin] = React.useState([]);
  const [name, setName] = React.useState('');
  const [filters, setFilters] = React.useState({
    filterByName: {},
    filterByNumericValues: [
    ],
  });
  const [column, setColumn] = React.useState('population');
  const [comparison, setComparison] = React.useState('maior que');
  const [value, setValue] = React.useState(null);

  const [options, setOptions] = React.useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  React.useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setOrigin(json.results));
  }, []);

  React.useEffect(() => {
    setData(origin);
  }, [origin]);

  const onClickFilter = () => {
    console.log(column, comparison, value);
    switch (comparison) {
    case ('maior que'):
      setData(origin
        .filter((planet) => Number(planet[column]) > Number(value)));
      break;
    case ('menor que'):
      setData(origin
        .filter((planet) => Number(planet[column]) < Number(value)));
      break;
    case ('igual a'):
      setData(origin
        .filter((planet) => Number(planet[column]) === Number(value)));
      break;
    default:
      setData(origin);
    }
  };

  const onNameChange = (itemname) => {
    setData(origin.filter((planetName) => planetName
      .name.toLowerCase().includes(itemname)));
    setName(itemname);
  };

  const context = {
    data,
    setData,
    filters,
    setFilters,
    origin,
    setOrigin,
    name,
    setName,
    onNameChange,
    options,
    setOptions,
    onClickFilter,
    setColumn,
    setComparison,
    setValue,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
