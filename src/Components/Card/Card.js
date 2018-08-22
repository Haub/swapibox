import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({name, species, homeworld, population}) => {
	
	return(
		<div className="Card">
			<h4>{name}</h4>
			<hr/>
			<h5>{species}</h5>
			<h5>{homeworld}</h5>
			<h5>{population}</h5>
			<button>Fav</button>
		</div>
	)

}

Card.propTypes = {
	item: PropTypes.object
	// name: PropTypes.string,
	// homeworld: PropTypes.string, 
	// species: PropTypes.string, 
	// population: PropTypes.string, 
	// favorite: PropTypes.string, 
	// terrain: PropTypes.string, 
	// climate: PropTypes.string, 
	// residents: PropTypes.string, 
	// model: PropTypes.string, 
	// carClass: PropTypes.string, 
	// passengerNumber: PropTypes.string
}