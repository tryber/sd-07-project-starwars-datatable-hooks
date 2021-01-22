import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getPlanet } from '../services/planetAPI';

const { Provider } = StarWarsContext;
const ProviderStarWars = ({ children }) => {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState('');
  const[filters, setFilters] = useState({ 
    filterByName: { name: '' }, 
    filterByNumericValues: [{ 
      column: 'population',
      comparison: 'maior que',
      value: '100000' }] })

  const fetchdata = async () => {
    const results = await getPlanet();
    setData([...results]);
  };

  useEffect(() => {
    fetchdata();
  }, []);

//filters { filterByName: { name }, filterByNumericValues: [{ column, comparison, value }] }

 const handleInput = ({target}) => {
  setInputText(target.value);
  setFilters({...filters, filterByName: {...filters.filterByName, name:inputText }})
 }
  const context = {
    data,
    inputText,
    handleInput,
  };

  return (
    <Provider value={ context }>
      { children }
    </Provider>
  );
};

ProviderStarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStarWars;
