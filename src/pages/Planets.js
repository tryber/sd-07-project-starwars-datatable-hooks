import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/table';
import Loading from '../components/Loading';
import '../css/Planets.css';

function Planets() {
  const { isFetching } = useContext(StarWarsContext);
  if (isFetching) return <Loading />
  return (
    <main className="main-container" >
      <Table />
    </main>
  )
}

export default Planets;
