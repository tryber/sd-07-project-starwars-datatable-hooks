import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../contextAPI/Context';
import planetsApi from '../services/getAPI';

function Provider(props) {
  const number = 0;
  const [disable1, setDisable1] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [disable3, setDisable3] = useState(false);
  const [disable4, setDisable4] = useState(false);
  const [disable5, setDisable5] = useState(false);

  const [column, setColumn] = useState({});
  const [comparison, setComparison] = useState({});
  const [values, setValue] = useState(number);
  const [filteredData, setFilteredData] = useState([]);

  const [filters, setFilters] = useState(
    { filterByName: { name: '' },
      filterByNumericValues: [] },
  );

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

  const onGetEvent = (event) => {
    const { name, value } = event.target;
    const position = { [name]: value };
    if (position.column === 'population' && column.column === 'population') {
      setDisable1({ disabled1: true });
    } else {
      setDisable1({ disabled1: false });
    }
    if (position.column === 'orbital_period' && column.column === 'orbital_period') {
      setDisable2({ disabled2: true });
    } else {
      setDisable2({ disabled2: false });
    }
    if (position.column === 'diameter' && column.column === 'diameter') {
      setDisable3({ disabled3: true });
    } else {
      setDisable3({ disabled3: false });
    }
    if (position.column === 'rotation_period' && column.column === 'rotation_period') {
      setDisable4({ disabled4: true });
    } else {
      setDisable4({ disabled4: false });
    }
    if (position.column === 'surface_water' && column.column === 'surface_water') {
      setDisable5({ disabled5: true });
    } else {
      setDisable5({ disabled5: false });
    }
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
    disable1,
    disable2,
    disable3,
    disable4,
    disable5,
    data,
    column,
    values,
    filters,
    comparison,
    filteredData,
    onGetEvent,
    setFilters,
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
