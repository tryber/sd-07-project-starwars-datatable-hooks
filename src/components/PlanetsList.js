import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const PlanetsList = () => {
	const { data, inputText  } = useContext(StarWarsContext);
    
    const filterIncludes = (data, inputText) => {
        return data.filter((item) => {return item.name.includes(inputText)})
	 };

	const splitElements = ( element ) => {
		const arrayElement = element.split(",");
		return arrayElement.map((unity) => (<p key={unity}> {unity} </p>))
	}
	const mapParagrafElement = (element) => {
		return element.map((unity) => (<p key={unity}> {unity} </p>))
	}
	const splitAndOrganize = (day) => {
		const dayItem = day.split('T')
		const dayItemZ = dayItem[1].split('Z')
		return(<p>Dia: {dayItem[0]} <br/> Hora {dayItemZ[0]}</p>)
	}
	const updatedData = filterIncludes(data, inputText);
  return (
    <table>
			<tr>
				<th>Nome</th>
				<th>Período de rotação</th>
				<th>Período de translação</th>
				<th>Diâmetro</th>
				<th>Clima </th>
				<th>Gravidade </th>
				<th>Biomas</th>
				<th>Superfície de água</th>
				<th>População</th>
				<th>Filmes</th>
				<th>Data de criação</th>
				<th>Data de Edição</th>
				<th>URL</th>
			</tr>
      { updatedData.map((item) => (
        <tr key={ item.name }>
					<td>{item.name}</td>
					<td>{item.rotation_period}</td>
					<td>{item.orbital_period}</td>
					<td>{item.diameter}</td>
					<td>{splitElements(item.climate)}</td>
					<td>{splitElements(item.gravity)}</td>
					<td>{splitElements(item.terrain)}</td>
					<td>{item.surface_water}</td>
					<td>{item.population}</td>
					<td>{mapParagrafElement(item.films)}</td>
					<td>{splitAndOrganize(item.created)}</td>
					<td>{splitAndOrganize(item.edited)}</td>
					<td>{item.url}</td>
        </tr>))}
    </table>
  );
};

export default PlanetsList;
