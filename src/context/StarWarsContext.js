import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/StarWarsAPI';

const Context = createContext();
const { Provider } = Context;

function StarWarsContext({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [allFilters, setFilter] = useState({
    filters: {
      filtersByName: '',
      filterByNumericValues: [],
    },
  });
  const columnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparisonOptions = [
    'maior que', 'menor que', 'igual a',
  ];

  // const [chosenColumn, setChosenColumn] = useState([]);
  // const [chosenComparison, setChosenComparison] = useState([]);

  const [availableColumn, setAvailableColumn] = useState([...columnOptions]);
  const [availableComparison, setAvailableComparison] = useState([...comparisonOptions]);
  // const availableColumn = [...columnOptions];
  // const availableComparison = [...comparisonOptions];
  // const [filteredData, setNameFilter] = useNameFilter();
  // const [isScanning, setScanning] = useState(true);
  // const [planets, setPlanets] = useState([]);

  // const handleSuccess = (json) => {
  //   console.log(json.results);
  //   const planets = [...json.results];
  //   setData([...planets]);
  // };

  // const handleError = (json) => {
  //   console.log(json);
  // };

  const fetchPlanets = async () => {
    setData(await getPlanets());
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const handleNameFilterChange = (value) => {
    setFilter({
      filters: {
        filtersByName: value,
        filterByNumericValues: allFilters.filters.filterByNumericValues,
      },
    });
    // setNameFilter(value);
  };

  const handleFiltersChange = (column, comparison, value) => {
    // console.log(column);
    // console.log(comparison);
    // console.log(value);
    const auxArray = [...allFilters.filters.filterByNumericValues];
    const newItem = {
      column,
      comparison,
      value,
    };
    auxArray.push(newItem);
    // console.log(newItem);
    setFilter({
      filters: {
        filtersByName: allFilters.filters.filtersByName,
        filterByNumericValues: [...auxArray] },
    });

    const newColumns = availableColumn.filter((item) => item !== column);
    setAvailableColumn([...newColumns]);
    const newComparison = availableComparison.filter((item) => item !== comparison);
    setAvailableComparison([...newComparison]);
  };

  const updateData = (newData) => {
    setFilteredData(newData);
  };

  useEffect(() => {
    const { filters } = allFilters;
    const { filtersByName } = filters;
    if (filtersByName !== '') {
      // console.log('aqui');
      const dataFiltered = data.filter(
        (value) => value.name.includes(filtersByName) === true,
      );
      // console.log(dataFiltered);
      updateData(dataFiltered);
    } else {
      // console.log('vazio');
      updateData([]);
    }
  }, [allFilters, data]);

  useEffect(() => {
    // console.log('chamou');
    const { filters } = allFilters;
    const { filterByNumericValues } = filters;
    const minimum = 0;
    if (filterByNumericValues.length > minimum) {
      let planetsData = [...data];
      let filtered = [];
      filterByNumericValues.forEach((element) => {
        element.value = parseInt(element.value, 10);
        if (element.comparison === 'maior que') {
          filtered = planetsData
            .filter((planet) => parseInt(planet[element.column], 10) > element.value
             && planet[element.column] !== 'unknown');
        } else if (element.comparison === 'menor que') {
          filtered = planetsData
            .filter((planet) => parseInt(planet[element.column], 10) < element.value
            && planet[element.column] !== 'unknown');
        } else {
          filtered = planetsData
            .filter((planet) => parseInt(planet[element.column], 10) === element.value
             && planet[element.column] !== 'unknown');
        }
        planetsData = [...filtered];
      });
      updateData(filtered);
      // console.log(filtered);
    }
  }, [allFilters, data]);

  const context = {
    data,
    fetchPlanets,
    allFilters,
    handleNameFilterChange,
    filteredData,
    // handleNameChange: setNameFilter,
    availableColumn,
    availableComparison,
    handleFiltersChange,
  };
  return (
    <Provider value={ context }>
      {children}
    </Provider>
  );
}

StarWarsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext as Provider, Context };
