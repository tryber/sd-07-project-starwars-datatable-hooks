import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import Table from '../components/Table';

export default function Home() {
  const { handleFetch, isFetching, data, doesDataExists } = useContext(Context);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <div>
      {doesDataExists && <Table data={ data } />}
      {isFetching && <span>Loading...</span>}
    </div>
  );
}
