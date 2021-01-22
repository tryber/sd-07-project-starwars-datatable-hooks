import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
	const { data } = useContext(StarWarsContext);
	return (
		<div>
			<table>
				<thead>
					
				</thead>
			</table>
		</div>
	)
}

export default Table;
