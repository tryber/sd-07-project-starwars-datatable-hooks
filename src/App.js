import React from 'react';
import Provider from './context/Provider';
import StarWarsPage from './components/StarWarsPage';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <StarWarsPage />
      </Provider>
    );
  }
}

export default App;
