import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/planetsAPI';

const { Provider } = StarWarsContext;

const columnOption = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonsOption = ['maior que', 'menor que', 'igual a'];

function StarWarsProvider({ children }) {
  const initialFilter = {
    filterByName: {
      name: '',
    },
    filterNumericValues: [
      {
        id: 0,
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
    ],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };

  const [isFetching, setIsFetching] = useState(false);

  const [header, setHeader] = useState();

  const [data, setData] = useState();

  const [filter, setFilter] = useState(initialFilter);

  const INITIAL_ID = 0;
  const [currentId, setCurrentId] = useState(INITIAL_ID);

  const [columnsAvalible, setColumnsAvalible] = useState({ 0: columnOption });

  const [comparisonsAvalible, setComparisonsAvalible] = useState({
    0: comparisonsOption,
  });

  const [dataInputName, setDataInputName] = useState();

  const [dataFilter, setDataFilter] = useState();

  const [dataStored, setDataStored] = useState();

  const handleComparison = (planet, id) => {
    const { column, comparison, value } = filter.filterNumericValues[id];
    if (!column || !comparison || !value) return true;
    const sizePlanet = parseInt(planet[column], 10);
    const valueInt = parseInt(value, 10);

    if (comparison === 'maior que') return sizePlanet > valueInt;

    if (comparison === 'menor que') return sizePlanet < valueInt;
    if (comparison === 'igual a') return sizePlanet === valueInt;
  };

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      const planets = await getPlanets();
      planets.forEach((planet) => delete planet.residents);
      setHeader(Object.keys(planets[0]));
      setData(planets);
      setDataStored(planets);
      setIsFetching(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let intersection = dataStored;
    if (dataInputName) {
      intersection = intersection.filter((value) => dataInputName.includes(value));
    }
    if (dataFilter) {
      Object.values(dataFilter).forEach((dataFiltered) => {
        intersection = intersection.filter((value) => Object.values(dataFiltered)
          .includes(value));
      });
    }
    setData(intersection);
  }, [dataInputName, dataFilter]);

  const sortNuber = (column, how, arrObj) => {
    if (how === 'ASC') {
      return arrObj.sort(
        (a, b) => parseFloat(a[column]) - parseFloat(b[column]),
      );
    }
    if (how === 'DESC') {
      return arrObj.sort(
        (a, b) => parseFloat(b[column]) - parseFloat(a[column]),
      );
    }
  };

  const sortString = (column, how, arrObj) => {
    const negative = -1;
    const positive = 1;
    const igual = 0;
    if (how === 'ASC') {
      return arrObj.sort((a, b) => {
        const nameA = a[column].toLowerCase();
        const nameB = b[column].toLowerCase();
        if (nameA < nameB) return negative;
        if (nameA > nameB) return positive;
        return igual;
      });
    }
    if (how === 'DESC') {
      return arrObj.sort((a, b) => {
        const nameA = a[column].toLowerCase();
        const nameB = b[column].toLowerCase();
        if (nameA < nameB) return positive;
        if (nameA > nameB) return negative;
        return igual;
      });
    }
  };

  const sortAll = (column, how, arrObj) => {
    const isNaN = Number.isNaN(parseFloat(arrObj[0][column]));
    if (isNaN) {
      return sortString(column, how, arrObj);
    }
    if (!isNaN) {
      return sortNuber(column, how, arrObj);
    }
  };

  const handleChangeSelect = (e, id) => {
    const keyOnChange = e.target.name;
    const a = [...filter.filterNumericValues];
    a[id] = { ...a[id], [keyOnChange]: e.target.value };
    setFilter({
      ...filter,
      filterNumericValues: a,
    });
  };

  const handleChangeOrder = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      order: { ...filter.order, [name]: value },
    });
  };

  const handleChangeInputName = (e) => {
    setFilter({
      ...filter,
      filterByName: { name: e.target.value },
    });
    const newData = dataStored.filter((planet) => planet.name.includes(e.target.value));
    setDataInputName(newData);
  };

  const handleActiveFilter = (id) => {
    // atualização do dataFilter
    const newData = dataStored.filter((planet) => handleComparison(planet, id));
    setDataFilter({ ...dataFilter, [id]: newData });

    // remoção dos dropdowns não mais disponíveis via id das condições filtradas após clicar em filter
    // colunas
    const { filterNumericValues } = filter;
    const newCols = columnsAvalible[id].filter(
      (c) => c !== filterNumericValues[id].column,
    );
    setColumnsAvalible({ ...columnsAvalible, [id + 1]: newCols });

    // condicoes
    const newCond = comparisonsAvalible[id].filter(
      (c) => c !== filterNumericValues[id].comparison,
    );
    setComparisonsAvalible({ ...comparisonsAvalible, [id + 1]: newCond });

    // add objeto no filtroNumericValues
    setFilter({
      ...filter,
      filterNumericValues: filter.filterNumericValues.concat({}),
    });
    setCurrentId(id + 1);
  };

  const handleDeleteFilter = (id) => {
    if (currentId === INITIAL_ID) return null;
    // deleta filtro
    const newDataFilter = dataFilter;
    delete newDataFilter[id - 1];
    setDataFilter({ ...newDataFilter });

    // deleta objeto criado pelo filtro em filterNumericValues
    const inicio = 0;
    const fim = -1;
    const { filterNumericValues } = filter;
    const newFilter = filterNumericValues.slice(inicio, fim);
    setFilter({ ...filter, filterNumericValues: newFilter });

    // deleta ultima alteração feita em colums avalible
    const newColumnsAvalible = columnsAvalible;
    delete newColumnsAvalible[id];
    setColumnsAvalible({ ...newColumnsAvalible });

    // deleta ultima alteração feita em comparisons avalible
    const newComparisonsAvalible = comparisonsAvalible;
    delete newComparisonsAvalible[id];
    setComparisonsAvalible({ ...newComparisonsAvalible });

    setCurrentId(id - 1);
  };

  const context = {
    isFetching,
    setIsFetching,
    header,
    setHeader,
    data,
    setData,
    filter,
    setFilter,
    getPlanets,
    handleChangeInputName,
    handleComparison,
    handleChangeSelect,
    handleActiveFilter,
    handleDeleteFilter,
    handleChangeOrder,
    sortAll,
    currentId,
    columnsAvalible,
    comparisonsAvalible,
  };
  return <Provider value={ context }>{children}</Provider>;
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
