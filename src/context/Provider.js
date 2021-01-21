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
      filters: { filterByName: { name: '' } },
    };

    this.getStarWarsAPI = this.getStarWarsAPI.bind(this);
    this.handleStartWarsSuccess = this.handleStartWarsSuccess.bind(this);
    this.handleStartWarsFailure = this.handleStartWarsFailure.bind(this);
    this.changeInputsByName = this.changeInputsByName.bind(this);
    this.filterByName = this.filterByName.bind(this);
  }

  componentDidMount() {
    this.getStarWarsAPI();
  }

  getStarWarsAPI() {
    const { isFetching } = this.state;

    if (isFetching) return;

    this.setState({ isFetching: true });

    fetchStarWars()
      .then(this.handleStartWarsSuccess, this.handleStartWarsFailure);
  }

  handleStartWarsSuccess(response) {
    const { results } = response;
    results.forEach((starwars) => delete starwars.residents);
    this.setState({
      isFetching: false,
      data: results,
    });
  }

  handleStartWarsFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
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

  filterByName(name) {
    const { data } = this.state;
    const filteredData = data.filter((curr) => curr.name.includes(name));
    this.setState({ data: filteredData });
    if (name === '') {
      this.getStarWarsAPI();
    }
  }

  render() {
    const contextValue = {
      getStarWarsAPI: this.getStarWarsAPI,
      changeInputsByName: this.changeInputsByName,
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
