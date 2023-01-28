import React from 'react';
import PropTypes from 'prop-types';

const ListCard = ({ data }) => {
  const { name, region, area } = data;
  return (
    <div className="Card">
      <h3>Country:  <p className="text">{name}</p></h3>
      <h3>Region: <p className="text">{region}</p></h3>
      <h3>Country area: <p className="text">{area} km <sup>2</sup></p></h3>
    </div>
  );
};

export default ListCard;
ListCard.defaultProps = {
  area: null,
  name: '',
  region: ''
};
ListCard.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string,
  region: PropTypes.string,
  area: PropTypes.number
};
