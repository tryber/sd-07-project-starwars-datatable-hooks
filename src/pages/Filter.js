import React, { useEffect, useState } from 'react';
import Table from './Table';

function Filter() {
  const minFilterValue = 0;
  const [addBtn, SetAddBtn] = useState(false);
  const [isupdating, setIsUpdating] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterColumn, SetFilterColumn] = useState('');
  const [filterComparison, SetFilterComparison] = useState('');
  const [filterValue, SetFilterValue] = useState(minFilterValue);
  const [filtername, setFiltername] = useState('');
  const [newfltrmsg, setNewFltrMsg] = useState('');
  const [filterData, setFilterData] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'Name',
        sort: 'ASC',
      },
    },
  });
  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    const presentFilters = filterData;
    if (name === 'column') {
      presentFilters.filters.order.column = value;
    } else {
      presentFilters.filters.order.sort = value;
    }
    setFilterData(presentFilters);
    console.log(filterData);
  };

  const sortPlanets = () => {
    const { column, sort } = filterData.filters.order;
    console.log(column, sort);
    let presentPlanets = filteredData;
    if (filteredData.length < 1) {
      presentPlanets = data;
    }
    function compare(a, b) {
      const one = 1;
      const minusone = -1;
      if (sort === 'ASC') {
        if (parseInt(a[column], 10) > parseInt(b[column], 10)) {
          return one;
        }
        return minusone;
      }
      if (parseInt(a[column], 10) < parseInt(b[column], 10)) {
        return one;
      }
      return minusone;
    }
    presentPlanets.sort((a, b) => compare(a, b));
    setFilteredData(presentPlanets);
    if (isupdating) {
      setIsUpdating(false);
    }
    setIsUpdating(true);
  };
  // tests if filter data alredy have all filters and disable button - to be tested
  const allFiltersAdded = () => {
    const { filterByNumericValues } = filterData.filters;
    const maxFilters = 4;
    if (filterByNumericValues > maxFilters) {
      SetAddBtn(true);
    }
    SetAddBtn(false);
  };
  const filterPlanets = (rawdata) => {
    const { name } = filterData.filters.filterByName;
    const { filterByNumericValues } = filterData.filters;
    const nameFiltered = rawdata.filter((planet) => {
      if (name !== '') {
        return planet.name.includes(name);
      }
      return planet;
    });
    let output = nameFiltered;
    if (filterByNumericValues !== []) {
      filterByNumericValues.forEach((filter) => {
        output = output.filter((planet) => {
          if (filter.comparison === 'maior que') {
            return (parseInt(planet[filter.column], 10) > parseInt(filter.value, 10));
          }
          if (filter.comparison === 'menor que') {
            return (parseInt(planet[filter.column], 10) < parseInt(filter.value, 10));
          }
          if (filter.comparison === 'igual a') {
            return (planet[filter.column] === filter.value);
          }
          return planet;
        });
      });
    }
    setFilteredData(output);
  };
  // creates the new filter to be added to filterbynumericvalues and checks if all values are filled - tested.
  const createNewFilter = () => {
    const newFilter = {
      column: filterColumn,
      comparison: filterComparison,
      value: filterValue,
    };
    const {
      column,
      comparison,
      value,
    } = newFilter;
    const valueCanotBe = 0;
    const { filterByNumericValues } = filterData.filters;
    let repeatedFilter = false;
    filterByNumericValues.forEach((filter) => {
      if (filter.column === newFilter.column) {
        repeatedFilter = true;
      }
    });
    if (repeatedFilter) {
      setNewFltrMsg('O filtro Já Existe!');
    } else if (column === '' || comparison === '' || value === valueCanotBe) {
      setNewFltrMsg('Todos os Valores Precisam ser Preenchidos');
    } else {
      filterData.filters.filterByNumericValues.push(newFilter);
      setNewFltrMsg('Filtro Adicionado');
      allFiltersAdded();
      filterPlanets(data);
    }
  };
  // deleta filtro - tested.
  const deleteFilter = (event) => {
    const column = event.target.name;
    const newFilterData = filterData;
    const presentfilters = [...filterData.filters.filterByNumericValues];
    const newfilters = presentfilters.filter(
      (element) => element.column !== column,
    );
    newFilterData.filters.filterByNumericValues = newfilters;
    setFilterData(newFilterData);
    setNewFltrMsg('Filtro Removido!');
    filterPlanets(data);
  };
  // add new filter to filterbynumericvalues / verify if filter is in duplicity - tested.
  const updateFilter = (event) => {
    const { name, value } = event.target;
    switch (name) {
    case 'column':
      SetFilterColumn(value);
      break;
    case 'comparison':
      SetFilterComparison(value);
      break;
    case 'value':
      SetFilterValue(value);
      break;
    default:
      break;
    }
  };
  // update filterbyname - tested.
  const updateNameFilter = (event) => {
    const { value } = event.target;
    setFiltername(value);
    const datavalue = filterData;
    filterData.filters.filterByName.name = value;
    setFilterData(datavalue);
  };
  // updates the planet data - tested.
  const updateData = (value) => {
    setData(value);
  };
  // used o useEffect to fetch API data - tested.
  const getApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    await fetch(url)
      .then((result) => result.json())
      .then((apidata) => {
        const rawApi = apidata.results;
        const one = 1;
        const minusone = -1;
        function compare(a, b) {
          if (a.name > b.name) {
            return one;
          }
          return minusone;
        }
        rawApi.sort((a, b) => compare(a, b));
        console.log(rawApi);
        updateData(rawApi);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    filterPlanets(data);
  }, [data, filtername, filterData.filters.filterByNumericValues.length]);

  useEffect(() => {
    filterPlanets(filteredData);
  }, [isupdating]);
  let istheredata = false;
  const nodata = 0;
  if (filteredData.length > nodata) {
    istheredata = true;
  }
  const { filterByNumericValues } = filterData.filters;
  return (
    <div>
      <input
        type="text"
        value={ filtername }
        onChange={ updateNameFilter }
        data-testid="name-filter"
        placeholder="Busca"
      />
      <select
        name="column"
        value={ filterColumn }
        onChange={ updateFilter }
        data-testid="column-filter"
      >
        <option>Selecione</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ filterComparison }
        onChange={ updateFilter }
      >
        <option>Selecione</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        type="number"
        value={ filterValue }
        onChange={ updateFilter }
        data-testid="value-filter"
      />
      <button
        disabled={ addBtn }
        type="button"
        onClick={ createNewFilter }
        data-testid="button-filter"
      >
        Adicinoar Filtro
      </button>
      <span>{newfltrmsg}</span>
      <div>
        {filterByNumericValues.map((filter, index) => {
          const { column, comparison, value } = filter;
          return (
            <div
              key={ index }
              name={ index }
              data-testid="filter"
            >
              <span>{`${column} ${comparison} ${value}`}</span>
              <button
                name={ `${column}` }
                onClick={ deleteFilter }
                type="button"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <select
          name="column"
          onChange={ handleOrderChange }
          data-testid="column-sort"
        >
          { istheredata
            ? Object.keys(filteredData[0]).map((element) => {
              console.log('entrounomap');
              return (
                <option key={ element } value={ element }>{ element }</option>
              );
            }) : <option>Carregando...</option>}
        </select>
        <div>
          <input
            onChange={ handleOrderChange }
            name="ordem"
            data-testid="column-sort-input-asc"
            type="radio"
            id="ASC"
            value="ASC"
            defaultChecked
          />
          <span>ASC</span>
        </div>
        <div>
          <input
            onChange={ handleOrderChange }
            name="ordem"
            data-testid="column-sort-input-desc"
            type="radio"
            id="DESC"
            value="DESC"
          />
          <span>DESC</span>
        </div>
        <button
          onClick={ sortPlanets }
          type="button"
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </div>
      <Table planets={ filteredData } />
    </div>
  );
}

export default Filter;
