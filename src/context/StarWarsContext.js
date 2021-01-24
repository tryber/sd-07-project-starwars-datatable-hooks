import { createContext, useCallback, useEffect, useState } from 'react';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const context = {
    data,
  };
  return (
    <StarWarsContext.Provider value={ context }>

      { children }
    </StarWarsContext.Provider>
  );
};

const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchResults = useCallback(async () => {
  const data = await fetch(url).then((response) => response.json());
}, []);

useEffect(() => {
  fetchResults();
}, []);

export { StarWarsContext, StarWarsProvider as Provider };

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
