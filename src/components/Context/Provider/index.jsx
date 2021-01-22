import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../../../service/contextAPI';
import StarWarsContext from '../StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataAPI = async () => {
      const { results } = await getPlanets();
      setData(results);
    };
    dataAPI();
  });

  const context = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
