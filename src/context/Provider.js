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
    };

    this.getStarWarsAPI = this.getStarWarsAPI.bind(this);
    this.handleStartWarsSuccess = this.handleStartWarsSuccess.bind(this);
    this.handleStartWarsFailure = this.handleStartWarsFailure.bind(this);
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

  render() {
    const contextValue = {
      getStarWarsAPI: this.getStarWarsAPI,
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
