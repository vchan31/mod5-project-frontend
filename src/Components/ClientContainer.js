import React from 'react';
import ClientCard from './ClientCard'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'


const ClientContainer = props => {
// console.log('Inside Client container, and its props:', props)
function mapClients(){

	if (props.clients.length === 0) {return ' You currently Do not have any active Clients, please add more in the New Client section...'}
else{
	return props.clients.map(function(client){
		return <Grid.Column key={client.id}><Segment><ClientCard name={client.name} email={client.email} number={client.number} key={client.id} id={client.id} status={client.status}
		/></Segment></Grid.Column>
	})}
}


return (
		<div className='ui grid'>

			<Grid columns={3} container doubling stackable>
			
			{mapClients()}

		</Grid>
		</div>

	)

}

 function mapStateToProps(state){

  	return {
  		clients: state.clients
  	}
  }


export default connect(mapStateToProps)(ClientContainer)