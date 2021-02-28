import React from 'react';
import Provider from '../context/Provider';
import Search from '../components/Search';
import Selected from '../components/Selected';
import Table from '../components/Table';

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
