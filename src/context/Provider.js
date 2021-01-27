import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import getSatrWarsPlanets from '../services/PlanetsAPI';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnOptions: {
        population: 'population',
        orbital_period: 'orbital_period',
        diameter: 'diameter',
        rotation_period: 'rotation_period',
        surface_water: 'surface_water',
      },
      error: null,
      isFetching: false,
      data: [],
      filteredData: undefined,
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [{
          column: '',
          comparison: '',
          value: '',
        }],
      },
    };

    this.fetchPlanets = this.fetchPlanets.bind(this);
    this.handlePlanetsSuccess = this.handlePlanetsSuccess.bind(this);
    this.handlePlanetsFailure = this.handlePlanetsFailure.bind(this);
    this.handleFilterName = this.handleFilterName.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.sendFilter = this.sendFilter.bind(this);
    this.applyFilterData = this.applyFilterData.bind(this);
  }

  fetchPlanets() {
    const { isFetching } = this.state;

    if (isFetching) return;

    this.setState({ isFetching: true });

    getSatrWarsPlanets().then(
      this.handlePlanetsSuccess,
      this.handlePlanetsFailure,
    );
  }

  handlePlanetsSuccess(response) {
    const { results } = response;
    this.setState({
      isFetching: false,
      data: results,
    });
  }

  handlePlanetsFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
    });
  }

  handleFilterName({ target }) {
    const { value, name } = target;
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        filterByName: {
          [name]: value,
        },
      },
    }), () => console.log(this.state));

    const { data } = this.state;
    if (target.value !== ' ') {
      this.setState({
        filteredData: data.filter((planets) => planets.name.includes(target.value)),
      });
    }
  }

  handleFilter({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  sendFilter() {
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        filterByNumericValues: [
          ...prevState.filters.filterByNumericValues,
          { column: prevState.column,
            comparison: prevState.comparison,
            value: prevState.value },
        ],
      },
    }), () => this.applyFilterData());
  }

  applyFilterData() {
    const { filters: { filterByNumericValues }, data } = this.state;
    let newData = data;
    console.log(newData);

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'menor que') {
        newData = newData.filter(
          (planet) => parseFloat(planet[column]) < parseFloat(value),
        );
        console.log(column, comparison, value);
      } else if (comparison === 'maior que') {
        newData = newData.filter(
          (planet) => parseFloat(planet[column]) > parseFloat(value),
        );
        console.log(newData);
      } else if (comparison === 'igual a') {
        newData = newData.filter(
          (planet) => parseFloat(planet[column]) === parseFloat(value),
        );
        console.log(newData);
      }
    });
    this.setState({ filteredData: newData }, () => console.log(newData));
  }

  render() {
    const contextValue = {
      ...this.state,
      getCurrentPlanets: this.fetchPlanets,
      handleFilterName: this.handleFilterName,
      handleFilter: this.handleFilter,
      sendFilter: this.sendFilter,
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
