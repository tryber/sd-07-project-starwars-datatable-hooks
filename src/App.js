import React, { useState } from 'react';
import StarWarsContext from './context/StarWarsContext';
import data from './Store/index';
import RenderForm from './components/RenderForm';
import RenderTable from './components/RenderTable';

function App() {
  const [state, setState] = useState(data);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [filterNumber, setFilterNumber] = useState([]);
  const allContext = {
    filterName: filterName.filterByName,
    setFilterName,
    filterNumber,
    setFilterNumber,
    state,
    setState,
  };
  return (
    <StarWarsContext.Provider
      value={ {
        allContext,
        state,
        setState,
      } }
    >
      <div>
        <RenderForm />
        <RenderTable />
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
