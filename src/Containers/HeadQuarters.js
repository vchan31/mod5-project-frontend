import React from 'react';
import ClientContainer from '../Components/ClientContainer'
import CreateClientForm from '../Components/createClientForm'


const HeadQuarters = props => {
// console.log(props)
	return (
		<div>

		<h1>HeadQuarters Page</h1>
		<CreateClientForm />
		<ClientContainer clients={props.clients}/>

		</div>
	)

}

export default HeadQuarters