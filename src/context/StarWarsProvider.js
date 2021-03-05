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
  const [column1, setColumn1] = React.useState('population');
  const [comparison1, setComparison1] = React.useState('maior que');
  const [value1, setValue1] = React.useState(null);

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

  const atualizaFiltro = () => {
    filters.filterByNumericValues.forEach((item) => {
      const { column, comparison, value } = item;
      switch (comparison) {
      case ('maior que'):
        setData(data
          .filter((planet) => Number(planet[column]) > Number(value)));
        break;
      case ('menor que'):
        setData(data
          .filter((planet) => Number(planet[column]) < Number(value)));
        break;
      case ('igual a'):
        setData(data
          .filter((planet) => Number(planet[column]) === Number(value)));
        break;
      default:
        setData(origin);
      }
    });
  };

  const onClickFilter = () => {
    console.log(column1, comparison1, value1);
    filters.filterByNumericValues.push({
      column: column1,
      comparison: comparison1,
      value: value1,
    });
    atualizaFiltro();
  };
  const removeFilter = (item) => {
    const zero = 0;
    filters.filterByNumericValues
      .splice(item, 1);
    if (filters.filterByNumericValues.length !== zero) {
      atualizaFiltro();
    } else {
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
    setColumn1,
    setComparison1,
    setValue1,
    removeFilter,
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
