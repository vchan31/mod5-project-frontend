import React from 'react';
import ClientCard from './ClientCard'
import { connect } from 'react-redux'



const ClientContainer = props => {
// console.log('Inside Client container, and its props:', props)
function mapClients(){

	if (props.clients.length === 0) {return ' You currently Do not have any active Clients, please add more in the New Client section...'}
else{
	return props.clients.map(function(client){
		return <ClientCard name={client.name} email={client.email} number={client.number} key={client.id} id={client.id} status={client.status}
		/>
	})}
}


return (
		<div className='ui grid'>

			{mapClients()}

		</div>

	)

}

 function mapStateToProps(state){

  	return {
  		clients: state.clients
  	}
  }


export default connect(mapStateToProps)(ClientContainer)