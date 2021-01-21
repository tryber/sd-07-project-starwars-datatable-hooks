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
      filters: {
        filterByName: {
          name: '',
        },
      },
    };

    this.fetchStarWarsPlanets = this.fetchStarWarsPlanets.bind(this);
    this.handleStarWarsPlanetsSuccess = this.handleStarWarsPlanetsSuccess.bind(this);
    this.handleStarWarsPlanetsFailure = this.handleStarWarsPlanetsFailure.bind(this);
    this.handleChangeFilterByName = this.handleChangeFilterByName.bind(this);
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
    });
  }

  handleStarWarsPlanetsFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
    });
  }

  handleChangeFilterByName(name) {
    this.setState((prevState) => ({
      filteredData: [...prevState.data.filter((planet) => planet.name.includes(name))],
      filters: {
        ...prevState.filters,
        filterByName: {
          name,
        },
      },
    }));
  }

  render() {
    const contextValue = {
      ...this.state,
      getStarWarsPlanets: this.fetchStarWarsPlanets,
      changeFilterName: this.handleChangeFilterByName,
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
