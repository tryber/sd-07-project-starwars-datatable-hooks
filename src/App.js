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
        name: ' ',
      },
    },
    handleChange: (value) => {
      const copyState = { ...state };
      copyState.filters.filterByName.name = value;
      setData(copyState);
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
        const copyState = { ...state };
        copyState.data = filtered;
        setData(copyState);
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
