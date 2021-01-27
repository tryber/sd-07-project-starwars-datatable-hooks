import React, { useEffect, useState } from 'react';
import './App.css';
import MyContext from './context/MyContext';
import getPlanets from './services/Api';
import TableView from './view/TableView';

function App() {
  const [state, setData] = useState({
    data: {},
    filters: {
      filterByName: {
        name: '',
      },
    },
    handleChange: (value) => {
      const newState = { ...state };
      newState.filters.filterByName.name = value;
      setData(newState);
    },
  });

  useEffect(() => {
    getPlanets()
      .then((response) => {
        const { name } = state.filters.filterByName;
        const filtered = response.map((resp) => {
          if (resp.name.includes(name)) return resp;
          return '';
        });
        const newState = { ...state };
        newState.data = filtered;
        setData(newState);
      });
  });

  return (
    <MyContext.Provider
      value={ state }
    >
      <div className="App">
        <TableView />
      </div>
    </MyContext.Provider>
  );
}

export default App;
