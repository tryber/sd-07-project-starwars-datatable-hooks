import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fetchStarWars from '../services/api';
import StarWarsContext from './StarWarsContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      data: [],
      filters: {
        filterByName: { name: '' },
        filterByNumericValues: [],
        filterByNumericsCurrency: {
          column: 'population',
          comparison: 'maior que',
          value: '0',
        },
      },
    };

    this.getStarWarsAPI = this.getStarWarsAPI.bind(this);
    this.changeInputsByName = this.changeInputsByName.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.changeSelectColumn = this.changeSelectColumn.bind(this);
    this.changeSelectComparison = this.changeSelectComparison.bind(this);
    this.changeSelectValue = this.changeSelectValue.bind(this);
    this.handleFilterByNumericValues = this.handleFilterByNumericValues.bind(this);
    this.handleRemoveFilter = this.handleRemoveFilter.bind(this);
  }

  componentDidMount() {
    this.getStarWarsAPI();
  }

  getStarWarsAPI() {
    const { isFetching } = this.state;
    if (isFetching) return;
    this.setState({ isFetching: true });
    fetchStarWars()
      .then((response) => {
        const { results } = response;
        results.forEach((starwars) => delete starwars.residents);
        this.setState({
          isFetching: false,
          data: results,
        });
      }, (error) => {
        this.setState({
          isFetching: false,
          error: error.message,
        });
      });
  }

  changeInputsByName({ target }) {
    const { name, value } = target;
    this.setState((state) => ({
      ...state,
      filters: {
        ...state.filters,
        filterByName: {
          [name]: value,
        },
      },
    }));
    this.filterByName(value);
  }

  changeSelectColumn({ target }) {
    const { value } = target;
    this.setState((state) => ({
      filters: {
        ...state.filters,
        filterByNumericsCurrency: {
          ...state.filters.filterByNumericsCurrency,
          column: value,
        },
      },
    }));
  }

  changeSelectComparison({ target }) {
    const { value } = target;
    this.setState((state) => ({
      filters: {
        ...state.filters,
        filterByNumericsCurrency: {
          ...state.filters.filterByNumericsCurrency,
          comparison: value,
        },
      },
    }));
  }

  changeSelectValue({ target }) {
    const { value } = target;
    this.setState((state) => ({
      filters: {
        ...state.filters,
        filterByNumericsCurrency: {
          ...state.filters.filterByNumericsCurrency,
          value,
        },
      },
    }));
  }

  filterByName(name) {
    const { data } = this.state;
    const filteredData = data.filter((curr) => curr.name.includes(name));
    this.setState({ data: filteredData });
    if (name === '') {
      this.getStarWarsAPI();
    }
  }

  handleFilterByNumericValues() {
    const {
      filters: { filterByNumericsCurrency },
      data,
    } = this.state;

    const {
      column,
      comparison,
      value,
    } = filterByNumericsCurrency;

    this.setState((state) => ({
      filters: {
        ...state.filters,
        filterByNumericValues: [
          ...state.filters.filterByNumericValues,
          filterByNumericsCurrency,
        ],
      },
    }));

    const filteredData = data.filter((curr) => {
      if (comparison === 'maior que') {
        return Number(curr[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(curr[column]) < Number(value);
      }
      if (comparison === 'igual a') return curr[column] === value;
      return true;
    });
    this.setState({ data: filteredData });
  }

  handleRemoveFilter() {
    const { filters: { filterByNumericValues }, filters } = this.state;
    if (filterByNumericValues.length) {
      const previousFilters = filterByNumericValues.pop();
      this.setState(
        {
          filters: {
            ...filters,
            filterByNumericValues: previousFilters,
          },
        },
      );
    }
    this.getStarWarsAPI();
  }

  render() {
    const contextValue = {
      getStarWarsAPI: this.getStarWarsAPI,
      changeInputsByName: this.changeInputsByName,
      changeSelectColumn: this.changeSelectColumn,
      changeSelectComparison: this.changeSelectComparison,
      changeSelectValue: this.changeSelectValue,
      handleFilterByNumericValues: this.handleFilterByNumericValues,
      handleRemoveFilter: this.handleRemoveFilter,
      ...this.state,
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
