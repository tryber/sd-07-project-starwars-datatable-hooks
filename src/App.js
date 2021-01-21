import React, {useState} from 'react';
import StarWarsContext, { data } from './context/StarWarsContext';
import RenderForm from './components/RenderForm';
import RenderTable from './components/RenderTable';

function App() {
  const [state, setState] = useState(data)
  return (
    <StarWarsContext.Provider value={{state, setState}}>
      <div>
        <RenderForm />
        <RenderTable />
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
