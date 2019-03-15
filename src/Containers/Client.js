import React from 'react';
import { connect } from 'react-redux'
import ScrumBoard from '../Components/ScrumBoard'


const Client = props => {

let targetClient = props.clients.find(function(client){
	return client.id === props.selectedClient
})

console.log(targetClient)

console.log('Client props:', props)

	return (
		<div>
		<h1>Client Page</h1>

		<p>{props.selectedClient ? targetClient.name : 'no client selected!' }</p>
		<p>{props.selectedClient ? targetClient.number : 'no client selected!'}</p>
				<p>{props.selectedClient ? targetClient.email : 'no client selected!'}</p>

		<p>current stage</p>

		<p>NEED A COMPONENT THAT HAS THE SCRUM BOARD</p>

		<p>current action:</p>
		<p>next action</p>
		<p>suggestions??</p>
	</div>
	)

}

function mapStateToProps(state){
	return {
		selectedClient: state.selectedClient,
		clients: state.clients
	}
}

export default connect(mapStateToProps)(Client)