import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getPlanet } from '../services/planetAPI';

const { Provider } = StarWarsContext;
const ProviderStarWars = ({ children }) => {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState('');
  const [newArray, setNewArray] = useState([]);

  const fetchdata = async () => {
    const results = await getPlanet();
    setData([...results]);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleIncludesArray = (array) => {
    setNewArray(array)
  }

 const handleInput = ({target}) => {
  setInputText(target.value);
 }
  const context = {
    data,
    inputText,
    handleInput,
    handleIncludesArray,
    newArray,
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
