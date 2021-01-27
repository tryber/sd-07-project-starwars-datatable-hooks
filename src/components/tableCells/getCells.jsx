import React from 'react';

function getCells(cells) {
  const listOfCells = [];
  cells.forEach((cell, index) => {
    listOfCells.push(
      <td key={ `cell-${index}` }>
        {cell}
      </td>,
    );
  });
  return listOfCells;
}

export default getCells;
