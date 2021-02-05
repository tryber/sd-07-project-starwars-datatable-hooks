import React, { useState } from 'react';
import StrWrs from './index';

function Provider({ children }) {
  const [initial, setInitial] = useState('');
  const value = {
    initial,
    setInitial,
  };

  return (
    <StrWrs.Provider value={value}>
      {children}
    </StrWrs.Provider>
  );
}

export default Provider;
