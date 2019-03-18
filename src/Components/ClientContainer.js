import React from 'react';
import ClientCard from './ClientCard'
import { connect } from 'react-redux'



const ClientContainer = props => {
// console.log(props)

function mapClients(){
	return props.clients.map(function(client){
		return <ClientCard name={client.name} email={client.email} number={client.number} key={client.id} id={client.id}
		/>
	})
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