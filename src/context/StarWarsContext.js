import React from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = React.createContext();

export const StarWarsStorege = ({ children }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=2&format=json')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  return (
    <StarWarsContext.Provider value={ { data } }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsStorege.propTypes = {
  children: PropTypes.node.isRequired,
};
