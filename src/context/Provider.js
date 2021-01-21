import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsList from '../services/callAPI';

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const callAPI = async () => {
      setIsFetching(true);
      const planetsList = await getPlanetsList();
      setData(planetsList);
      setIsFetching(false);
    };
    callAPI();
  }, []);

  const contextValue = {
    isFetching,
    data,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;
