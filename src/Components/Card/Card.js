import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({name, species, homeworld, population, terrain, climate, residents, model, vehicle_class, passengers, currentlyDisplayed}) => {
		
	if(currentlyDisplayed==='people') { 
		return(
			<div className="Card">
				<h4>{name}</h4>
				<hr/>
				<h5>{species}</h5>
				<h5>{homeworld}</h5>
				<h5>{population}</h5>
				<button>Fav</button>
			</div>
		);
	}

	if(currentlyDisplayed==='planets') {
		console.log(currentlyDisplayed)
		return(
			<div className="Card">
				<h4>{name}</h4>
				<hr/>
				<h5>{terrain}</h5>
				<h5>{population}</h5>
				<h5>{climate}</h5>
				<h5>{residents}</h5>
				<button>Fav</button>
			</div>
		)
	}

	if(currentlyDisplayed === 'vehicles') {
		return(
			<div className="Card">
				<h4>{name}</h4>
				<hr/>
				<h5>{model}</h5>
				<h5>{vehicle_class}</h5>
				<h5>{passengers}</h5>
				<button>Fav</button>
			</div>
		)
	}
}	

Card.propTypes = {
	name: PropTypes.string,
	homeworld: PropTypes.string, 
	species: PropTypes.string, 
	population: PropTypes.string, 
	favorite: PropTypes.string, 
	terrain: PropTypes.string, 
	climate: PropTypes.string, 
	residents: PropTypes.string, 
	model: PropTypes.string, 
	vehicle_class: PropTypes.string, 
	passengers: PropTypes.string,
	currentlyDisplayed: PropTypes.string
}