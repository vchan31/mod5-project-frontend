import React from 'react';
import PropTypes from 'prop-types';


export default class Droppable extends React.Component{

drop = (e) => {
	e.preventDefault();

	if (['dr2','dr3','dr4','dr5','dr6','dr7','dr8'].includes(e.target.id)){

		if ( this.props.client.budget === null && this.props.client.area_of_interest === null && this.props.prequal === false) {
		alert('It Looks like this client has not been properly pre-qualified; please schedule an appointment with him/her and complete the form;')
		}

			else if (['dr5','dr6','dr7','dr8'].includes(e.target.id) && this.props.client.accepted_offer === null){
				alert('You cannot be in contract and beyond without an accepted offer;')
			}
			
			else {
			this.props.dropOnChange(e.target.id)
			const data = e.dataTransfer.getData('transfer');
			// console.log(e.target)
			e.target.appendChild(document.getElementById(data));
			}
	}//end of first if, 


	else {
		this.props.dropOnChange(e.target.id)
		const data = e.dataTransfer.getData('transfer');
		// console.log(e.target)
		e.target.appendChild(document.getElementById(data));

	}

}//end of drop function

allowDrop = (e) => {
	e.preventDefault();

}

render(){

// console.log(this.props)
	return(

		<div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
			{this.props.children}
		</div>

		)
}

}

Droppable.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node,
}
