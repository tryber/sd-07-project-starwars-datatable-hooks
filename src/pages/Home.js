import React from 'react';
import Provider from '../context/Provider';
import Table from '../components/Table';
import SearchInput from '../components/Search';
import SearchSelected from '../components/Selected';

function Home() {
  return (
    <Provider>
      <SearchInput />
      <SearchSelected />
      <Table />
    </Provider>
  );
}

export default Home;
