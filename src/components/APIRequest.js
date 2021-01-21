import React from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from './Table'

const apiRequest = () => {
    return (
        <StarWarsContext.Provider value={}>
            <div>
                <Table />
            </div>
        </StarWarsContext.Provider>
    )
}