import React from 'react';


const ClientCard = props => {
const {
	name,
	email,
	number
	} = props
// console.log(props)
	return (

		<div className='Client-card'>
		<img className='resize-image' src='http://localhost:3001/img_avatar3.png' alt='picture'/>
		<div className='container'>
		<p>{name}</p>
		<p>{email}</p>
		<p>{number}</p>
		</div>
		</div>

	)

}

export default ClientCard