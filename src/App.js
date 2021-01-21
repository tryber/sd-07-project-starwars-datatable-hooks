import React from 'react';
import './App.css';
import initialState from './context/initialState';
import reducer from './context/reducer';
import StarWarsContext from './context/StarWarsContext';
import InitialPage from './pages/InitialPage';

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <StarWarsContext.Provider value={ { state, dispatch } }>
      <InitialPage />
    </StarWarsContext.Provider>
  );
}

export default App;
