import React, { useEffect, useState } from 'react';
import './App.css';
import MyContext from './context/MyContext';
import getPlanets from './services/Api';
import TableView from './view/TableView';

function App() {
  const [state, setData] = useState({
    requested: false,
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
        const changeState = { ...state };
        if (!state.requested) {
          const filtered = response.map((resp) => {
            if (resp.name.includes(name)) return resp;
            return '';
          });
          changeState.data = filtered;
          setData(changeState);
        }
        changeState.requested = true;
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
