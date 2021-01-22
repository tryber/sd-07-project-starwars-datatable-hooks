import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import getSatrWarsPlanets from '../services/PlanetsAPI';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      data: [],
    };

    this.fetchPlanets = this.fetchPlanets.bind(this);
    this.handlePlanetsSuccess = this.handlePlanetsSuccess.bind(this);
    this.handlePlanetsFailure = this.handlePlanetsFailure.bind(this);
  }

  fetchPlanets() {
    const { isFetching } = this.state;

    if (isFetching) return;

    this.setState({ isFetching: true });

    getSatrWarsPlanets()
      .then(this.handlePlanetsSuccess, this.handlePlanetsFailure);
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

  render() {
    const contextValue = {
      ...this.state,
      getCurrentPlanets: this.fetchPlanets,
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
