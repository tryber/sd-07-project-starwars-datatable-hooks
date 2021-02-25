import React from 'react';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  const context = {
    data,
    setData,
  };

  return (
    <div>
      <StarWarsContext.Provider value={ context }>
        {children}
      </StarWarsContext.Provider>
    </div>
  );
}

export default StarWarsProvider;
