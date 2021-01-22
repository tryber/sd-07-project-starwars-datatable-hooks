import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getStarWarsPlanets } from '../services/starWarsAPI';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      data: undefined,
      filteredData: undefined,
      columnFilter: '',
      comparisonFilter: '',
      valueFilter: '',
      columnSort: '',
      valueSort: '',
      numericColumns: {
        population: 'Population',
        orbital_period: 'Orbital Period',
        diameter: 'Diameter',
        rotation_period: 'Rotation Period',
        surface_water: 'Surface Water',
      },
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
        order: {
          column: 'name',
          sort: 'ASC',
        },
      },
    };

    this.fetchStarWarsPlanets = this.fetchStarWarsPlanets.bind(this);
    this.handleStarWarsPlanetsSuccess = this.handleStarWarsPlanetsSuccess.bind(this);
    this.handleStarWarsPlanetsFailure = this.handleStarWarsPlanetsFailure.bind(this);
    this.handleChangeFilterByName = this.handleChangeFilterByName.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.addFilterByNumericValues = this.addFilterByNumericValues.bind(this);
    this.deleteFilterByNumericValues = this.deleteFilterByNumericValues.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.applySort = this.applySort.bind(this);
    this.updateSort = this.updateSort.bind(this);
  }

  fetchStarWarsPlanets() {
    const { isFetching } = this.state;

    if (isFetching) return;

    this.setState({ isFetching: true });

    getStarWarsPlanets()
      .then(this.handleStarWarsPlanetsSuccess, this.handleStarWarsPlanetsFailure);
  }

  handleStarWarsPlanetsSuccess(response) {
    const { results } = response;

    this.setState({
      isFetching: false,
      data: results,
      filteredData: results,
    }, () => this.applySort());
  }

  handleStarWarsPlanetsFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
    });
  }

  handleChangeFilterByName(name) {
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        filterByName: {
          name,
        },
      },
    }), () => this.applyFilters());
  }

  handleChangeFilter({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  addFilterByNumericValues() {
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        filterByNumericValues: [
          ...prevState.filters.filterByNumericValues,
          { column: prevState.columnFilter,
            comparison: prevState.comparisonFilter,
            value: prevState.valueFilter },
        ],
      },
    }), () => this.setState({
      columnFilter: '',
      comparisonFilter: '',
      valueFilter: '',
    }, () => this.applyFilters()));
  }

  deleteFilterByNumericValues(filterColumn) {
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        filterByNumericValues: [...prevState.filters.filterByNumericValues]
          .filter(({ column }) => column !== filterColumn),
      },
    }),
    () => this.applyFilters());
  }

  applyFilters() {
    const { data, filters: { filterByName, filterByNumericValues } } = this.state;
    let newFilteredData = [...data];
    if (filterByName.name !== '') {
      newFilteredData = newFilteredData.filter(
        (planet) => planet.name.includes(filterByName.name),
      );
    }
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        newFilteredData = newFilteredData.filter(
          (planet) => parseFloat(planet[column]) > parseFloat(value),
        );
        break;
      case 'menor que':
        newFilteredData = newFilteredData.filter(
          (planet) => parseFloat(planet[column]) < parseFloat(value),
        );
        break;
      default:
        newFilteredData = newFilteredData.filter(
          (planet) => parseFloat(planet[column]) === parseFloat(value),
        );
      }
    });

    this.setState({ filteredData: newFilteredData });
  }

  applySort() {
    const { data, filters: { order: { column, sort } }, numericColumns } = this.state;
    const newFilteredData = [...data];
    const NEGATIVE_UM = -1;
    const ZERO = 0;
    newFilteredData.sort((a, b) => {
      if (Object.prototype.hasOwnProperty.call(numericColumns, column)) {
        return sort === 'ASC' ? a[column] - b[column] : b[column] - a[column];
      }
      if (a[column] > b[column]) return sort === 'ASC' ? 1 : NEGATIVE_UM;
      if (a[column] < b[column]) return sort === 'ASC' ? NEGATIVE_UM : 1;
      return ZERO;
    });

    this.setState({ filteredData: newFilteredData });
  }

  updateSort() {
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        order: {
          column: prevState.columnSort,
          sort: prevState.valueSort,
        },
      },
    }), () => this.setState({
      columnSort: '',
      valueSort: '',
    }, () => this.applySort()));
  }

  render() {
    const contextValue = {
      ...this.state,
      getStarWarsPlanets: this.fetchStarWarsPlanets,
      changeFilterName: this.handleChangeFilterByName,
      addFilterByNumericValues: this.addFilterByNumericValues,
      changeFilter: this.handleChangeFilter,
      deleteFilterByNumericValues: this.deleteFilterByNumericValues,
      updateSort: this.updateSort,
    };

    const { children } = this.props;

    return (
      <StarWarsContext.Provider value={ contextValue }>
        {children}
      </StarWarsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
