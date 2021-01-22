import React from 'react';
import SearchField from '../../components/SearchField';
import SearchNumeric from '../../components/SearchNumeric';
import Table from '../../components/Table';
import ListFilter from '../../components/ListFilter';
import SortPlanet from '../../components/SortPlanet';

const InitialPage = () => (
  <>
    <SearchField />
    <SearchNumeric />
    <SortPlanet />
    <ListFilter />
    <Table />
  </>
);

export default InitialPage;
