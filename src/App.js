import React, { useState } from 'react';
import StarWarsContext from './context/StarWarsContext';
import data from './Store/index';
import RenderForm from './components/RenderForm';
import RenderTable from './components/RenderTable';

function App() {
  const [state, setState] = useState(data);
  return (
    <StarWarsContext.Provider
      value={ {
        filtersByName: state.filters.filterByName.name,
        filtersByNumericValue: state.filters.filterByNumericValues,
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
