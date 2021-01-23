import React from 'react';
import PropTypes from 'prop-types';

function DropDown({ id, handleChange, dataTest, options, selectValue }) {
  function selectChange(event) {
    const sel = event.target;
    const value = sel.options[sel.selectedIndex].text;
    const selectOption = { target: { id, value } };
    handleChange(selectOption);
  }

  return (
    <div>
      <select
        value={ selectValue }
        onChange={ selectChange }
        data-testid={ dataTest }
      >
        {options.map((option) => (
          <option key={ option } value={ option }>
            { option }
          </option>
        ))}
      </select>
    </div>
  );
}

DropDown.propTypes = {
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  dataTest: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectValue: PropTypes.string.isRequired,
};

export default DropDown;
