import React from 'react';
import './App.css';
import Table from './components/Table';
import MyContext from './context/MyContext';
import getPlanets from './services/Api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: '',
    };
  }

  render() {
    getPlanets().then((data) => this.setState({ data }));
    const { data } = this.state;
    return (
      <MyContext.Provider value={ data }>
        <Table />
      </MyContext.Provider>
    );
  }
}

export default App;
