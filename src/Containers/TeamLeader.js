import React, { Component } from 'react';
// import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import TeamMember from '../Components/TeamMember'

class TeamLeader extends Component {

renderTeamMembers = () => {
	return this.props.users.map(function(teamMember){
		return <TeamMember key={teamMember.id} name={teamMember.name} clients={teamMember.clients} id={teamMember.id}/>
	})
}


render(){
console.log(this.props)

return (
	<div>
	<h1>Team Leader Page</h1>
	<br/>
	{this.renderTeamMembers()}

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