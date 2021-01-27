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
      const changeState = { ...state };
      changeState.filters.filterByName.name = value;
      setData(changeState);
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
        const changeState = { ...state };
        changeState.data = filtered;
        setData(changeState);
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
