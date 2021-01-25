import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import SearchBar from './SearchBar';

function Home() {
  const { isFetching } = useContext(StartWarsContext);
  return (
    <main>
      <h1>May the force be with you</h1>
      {isFetching ? <h1>Loading...</h1>
        : (
          <div>
            <SearchBar />
            <table border="1">
              <TableHeader />
              <TableBody />
            </table>
          </div>
        )}
    </main>

  );
}

export default Home;
