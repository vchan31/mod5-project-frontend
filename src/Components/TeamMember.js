import React from 'react';
import TeamClientCard from './TeamClientCard'
// import styled from 'styled-components'


const TeamMember = props => {

// console.log(props.clients)

// const TeamCard = styled.div`

// 	width: 200px;
//     height: auto;
//     border-radius: 5px;
// `;

function mapClients(){

	if (props.clients.length === 0){return 'This Team Member is currently not working with any clients'

	}
else{
	return props.clients.map(function(client){
		
		return <div key={client.id} className='teamcard'>
		<TeamClientCard name={client.name} email={client.email} number={client.number} id={client.id} key={client.id} status={client.status}/>
		</div>
	})}
	}


	return (
		<div>
		<h2>{props.name}</h2>
		<p>id: {props.id}</p>
		<br/>

		{mapClients()}
		


		</div>

		)


}

export default TeamMember