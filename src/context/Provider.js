import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starwarsAPI from '../services/starwarsAPI';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      planetsStarWars: [],
    };
    this.fetchPlanets = this.fetchPlanets.bind(this);
  }

  async fetchPlanets() {
    const { isFetching } = this.state;

    if (!isFetching) return;

    await this.setState({ isFetching: false });

    await starwarsAPI().then((response) => {
      this.setState({ planetsStarWars: response.results });
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      fetchPlanets: this.fetchPlanets,
    };

    const { children } = this.props;
    return (
      <StarWarsContext.Provider value={ contextValue }>
        {children}
      </StarWarsContext.Provider>
    );
  }
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};
