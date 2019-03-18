import React from 'react';
import ClientCard from './ClientCard'



const ClientContainer = props => {
// console.log(props)

function mapClients(){
	return props.clients.map(function(client){
		return <ClientCard name={client.name} email={client.email} number={client.number} key={client.id} id={client.id}
		handleSelectClient={props.handleSelectClient}
		/>
	})
}
return (
		<div className='ui grid'>
			{mapClients()}
		</div>

	)

}

export default ClientContainer