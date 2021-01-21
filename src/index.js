import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ProviderStarWars from './context/Provider';

render(
  <ProviderStarWars>
    <App />
  </ProviderStarWars>,
  document.getElementById('root'),
);
