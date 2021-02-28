import React from 'react';
import Provider from '../context/Provider';
import Table from '../components/Table';
import Search from '../components/Search';
import Selected from '../components/Selected';

function Home() {
  return (
    <Provider>
      <Search />
      <Selected />
      <Table />
    </Provider>
  );
}

export default Home;
