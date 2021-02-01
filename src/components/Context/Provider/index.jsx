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
  });
  const [paramColumn, setParamColumn] = useState('');
  const [paramComparison, setParamComparison] = useState('');
  const [paramNumber, setParamNumber] = useState('');
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    const dataAPI = async () => {
      const { results } = await getPlanets();
      setData(results);
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
