import React from 'react';
import StarWarsContext from './StarWarsContext';
import Header from '../component/Header';
import Tablet from '../component/Tablet';

function StarWarsProvider() {
  const [data, setData] = React.useState([]);
  const [filters, setFilters] = React.useState({});

  React.useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  const context = {
    data,
    setData,
    filters,
    setFilters,
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
