import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ onChange, value1, value2, value3 }) => {
  return (

    <select
      onChange={onChange}
      className="button button--primary button--sm"
    >   <option value={value1}>{value1}</option>
      <option value={value2}>{value2}</option>
      {value3 && <option value={value3}>{value3}</option>}
    </select>

  );
};
export default Select;
Select.defaultProps = {
  value3: ''
};
Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
  value3: PropTypes.string
};
