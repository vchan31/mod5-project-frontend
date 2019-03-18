import React from 'react';
import ClientContainer from '../Components/ClientContainer'
import CreateClientForm from '../Components/createClientForm'
import SideBar from '../Components/SideBar'


const HeadQuarters = props => {
// console.log(props)
	return (
		<div>

		<h1>HeadQuarters Page</h1>
		<CreateClientForm />
		<br/>
		<SideBar />
		<ClientContainer clients={props.clients}/>

		</div>
	)

}

export default HeadQuarters