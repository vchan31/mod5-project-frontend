import React, { Component } from 'react';
// import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import TeamMember from '../Components/TeamMember'
import '../TeamLeader.css'
import TeamMetrics from '../Components/TeamMetrics'

class TeamLeader extends Component {

renderTeamMembers = () => {
	return this.props.users.map(function(teamMember){
		return <div className='team-member-container' key={teamMember.id}><TeamMember key={teamMember.id} name={teamMember.name} clients={teamMember.clients} id={teamMember.id}/></div>
	})
}


render(){
console.log(this.props)

return (
	<div>
		<div className='headerTeam'><h1>Team Leader Page</h1></div>
		<div className='topright'><TeamMetrics/></div>
		<h2>Your Team Members:</h2>
		<br/><br/>
		{this.renderTeamMembers()}
		

		<div className='footer'></div>

	</div>
		)
	}

}


function mapStateToProps(state){

	return {
		users: state.users
	}
}

export default connect(mapStateToProps)(TeamLeader)