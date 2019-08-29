import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({backgroundColor, onClick, showing}) => {
	let style = {};
	if(showing){
		style.backgroundColor = backgroundColor;
	}
    return(
      <div onClick={onClick} className="card-container" style={style}>
      	
      </div>
    )
}

Card.propTypes = {
  showing: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
