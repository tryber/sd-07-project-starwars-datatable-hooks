import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../contextAPI/Context';
import planetsApi from '../services/getAPI';

function Provider(props) {
  const number = 0;
  const [column, setColumn] = useState({});
  const [comparison, setComparison] = useState({});
  const [values, setValue] = useState(number);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [data, setData] = useState([]);
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, filterByName: { [name]: value } });
  };

  const onHandlecolumn = (event) => {
    const columnChoice = event.target.value;
    setColumn({ column: columnChoice });
  };

  const onHandleComparison = (event) => {
    const comparisonChoice = event.target.value;
    setComparison({ comparison: comparisonChoice });
  };

  const onHandleNumber = (event) => {
    const numberChoice = event.target.value;
    setValue({ number: numberChoice });
  };

  const { filterByName } = filters;
  const { name } = filterByName;

  useEffect(() => {
    setFilteredData(data);// eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (name) {
      const itemFiltered = data.filter((el) => el.name.toLowerCase().includes(name));
      setFilteredData(itemFiltered);
    } else {
      setFilteredData(data);
    }
  }, [name, data]);

  useEffect(() => {
    const getPlanet = async () => {
      const { results } = await planetsApi();
      setData(results);
    };
    getPlanet();
  }, []);

  const contexto = {
    data,
    column,
    values,
    filters,
    comparison,
    filteredData,
    onHandlecolumn,
    onHandleChange,
    onHandleNumber,
    setFilteredData,
    onHandleComparison };

  const { children } = props;

  return (
    <Context.Provider value={ contexto }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
