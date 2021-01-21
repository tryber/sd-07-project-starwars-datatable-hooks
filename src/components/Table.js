import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
    return (
        <StarWarsContext.Consumer>
            {
                value => (
                    <div>
                        
                    </div>
                )
            }
        </StarWarsContext.Consumer>
    )
}