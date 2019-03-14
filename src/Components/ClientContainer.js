import React from 'react';
import ClientCard from './ClientCard'



const ClientContainer = props => {
// console.log(props)

function mapClients(){
	return props.clients.map(function(client){
		return <ClientCard name={client.name} email={client.email} number={client.number} key={client.id}/>
	})
}
return (
		<div>
			{props ? mapClients() : <h1>Loading!</h1>}
		</div>

	)

}

export default ClientContainer