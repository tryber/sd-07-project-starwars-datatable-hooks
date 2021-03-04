import React from 'react';
import StarWarsContext from './StarWarsContext';
import Header from '../component/Header';
import Tablet from '../component/Tablet';

function StarWarsProvider() {
  const [data, setData] = React.useState([]);
  const [origin, setOrigin] = React.useState([]);
  const [name, setName] = React.useState('');
  const [filters, setFilters] = React.useState({});

  React.useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setOrigin(json.results));
  }, []);

  React.useEffect(() => {
    setData(origin);
  }, [origin]);

  const onNameChange = (value) => {
    setData(origin.filter((planetName) => planetName
      .name.toLowerCase().includes(value)));
    setName(value);
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
  };

  return (
    <div>
      <StarWarsContext.Provider value={ context }>
        <Header />
        <Tablet />
      </StarWarsContext.Provider>
    </div>
  );
}

export default StarWarsProvider;
