import React, { useContext } from 'react'
import StarWarsContext from '../context/StarWarsContext'

function InputSearch() {
  const {filter, setFilter} = useContext(StarWarsContext)
  const handleFilter = ({ target }) => setFilter({filters: { filterByName: { name: target.value } }})
  return (
    <form>
      <input type='text' data-testid='name-filter' onChange={handleFilter} value={filter.filters.filterByName.name}></input>
    </form>
  )
}

export default InputSearch