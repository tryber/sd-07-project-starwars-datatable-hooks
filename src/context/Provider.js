import React from 'react';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = React.useState(null);
  const [headers, setHeaders] = React.useState(null);
  const contextValue = {
    data,
    setData,
    headers,
    setHeaders,
  };
  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;
