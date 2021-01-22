import React, { createContext, useState, useEffect, useReducer } from 'react';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  
  const initialFilterState = { 
    name: '',
    column: 'population',
    comparison: 'maior que',
    value: 0,
    applyFilter: false,
  };

  const filterReducer = (state, action) => {
    const { type, value } = action;
    switch (type) {
      case 'name':
        return {
          ...state,
          name: value, 
        };
      case 'column':
        return {
          ...state,
          column: value,
        };
      case 'comparison':
        return {
          ...state,
          comparison: value,
        }
      case 'value':
        return {
          ...state,
          value: value,
        }
      case 'apply-filter':
        if (state.applyFilter) {
          return {
            ...state,
            applyFilter: false,
          }
        }
        return {
          ...state,
          applyFilter: true,
        }
      default:
        return state;
    }
  }
  
  const [data, setData] = useState([]);
  const [filter, dispatch] = useReducer(filterReducer, initialFilterState);

  async function fetchData() {
    const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then(response => response.json());
    setData(results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const context = {
    data,
    filter,
    dispatch,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

export { StarWarsContext, StarWarsProvider as Provider };
