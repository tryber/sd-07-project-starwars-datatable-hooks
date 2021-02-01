import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../../../service/contextAPI';
import StarWarsContext from '../StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planetList, setPlanetList] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: '',
      sort: '',
    },
  });
  const [paramColumn, setParamColumn] = useState('');
  const [paramComparison, setParamComparison] = useState('');
  const [paramNumber, setParamNumber] = useState('');
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    const orderNumberAsc = 1;
    const orderNumberDesc = -1;
    const orderNumberNull = 0;
    const dataAPI = async () => {
      const { results } = await getPlanets();
      const resultsOrdened = results.sort((a, b) => {
        if (a.name > b.name) return orderNumberAsc;
        if (a.name < b.name) return orderNumberDesc;
        return orderNumberNull;
      });
      setData(resultsOrdened);
    };
    dataAPI();
  }, []);

  const planetListName = filterData ? planetList
    .filter((planet) => planet.name.toLowerCase()
      .includes(filters.filterByName.name.toLowerCase())) : filterData
    .filter((planet) => planet.name.toLowerCase()
      .includes(filters.filterByName.name.toLowerCase()));

  const handleFilterPlanets = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const handleFiltersByColumn = ({ target: { value } }) => {
    setParamColumn(value);
  };

  const handleFiltersByComparison = ({ target: { value } }) => {
    setParamComparison(value);
  };

  const handleFiltersByNumber = ({ target: { value } }) => {
    setParamNumber(value);
  };

  const searchButton = () => {
    if (paramComparison !== '' && paramColumn !== '' && paramNumber !== '') {
      setFilters({
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues,
          { column: paramColumn,
            comparison: paramComparison,
            value: paramNumber },
        ],
      });
      switch (paramComparison) {
      case 'maior que':
        setFilterData(planetListName
          .filter((planet) => Number(planet[paramColumn]) > Number(paramNumber)));
        break;
      case 'menor que':
        setFilterData(planetListName
          .filter((planet) => Number(planet[paramColumn]) < Number(paramNumber)));
        break;
      case 'igual a':
        setFilterData(planetListName
          .filter((planet) => Number(planet[paramColumn]) === Number(paramNumber)));
        break;
      default:
        setFilterData(planetListName);
      }
    } else setFilterData(planetListName);
  };

  const deleteParam = (e) => {
    const { value } = e.target;
    const filterUsed = filters.filterByNumericValues
      .filter((param) => (param.column) !== value);
    setFilters({
      ...filters,
      filterByNumericValues: filterUsed,
    });
    setFilterData(data);
  };

  const handleOrderBySelect = ({ target: { value } }) => {
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        column: value,
      },
    });
  };

  const getOrder = ({ target: { value } }) => {
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        sort: value,
      },
    });
  };

  const orderPlanets = () => {
    const { order: { column } } = filters;
    if (filters.order.sort === 'ASC') {
      const listASC = planetListName.sort((a, b) => a[column] - b[column]);
      setFilterData(listASC);
    } else {
      const listDESC = planetListName.sort((a, b) => b[column] - a[column]);
      setFilterData(listDESC);
    }
  };

  const context = {
    data,
    filters,
    handleFilterPlanets,
    paramNumber,
    setParamNumber,
    paramColumn,
    setParamColumn,
    paramComparison,
    setParamComparison,
    handleFiltersByColumn,
    handleFiltersByComparison,
    handleFiltersByNumber,
    searchButton,
    filterData,
    planetList,
    setPlanetList,
    planetListName,
    deleteParam,
    handleOrderBySelect,
    getOrder,
    orderPlanets,
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
