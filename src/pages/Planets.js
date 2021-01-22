import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/Table';
import Loading from '../components/Loading';
import FilterTable from '../components/FilterTable';
import '../css/Planets.css';

function Planets() {
  const { isFetching } = useContext(StarWarsContext);
  if (isFetching) return <Loading />
  return (
    <main className="main-container" >
      <FilterTable />
      <Table />
    </main>
  )
}

export default Planets;
