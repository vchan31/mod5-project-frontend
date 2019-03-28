import React, { Component } from 'react';
import ClientContainer from '../Components/ClientContainer'
import CreateClientForm from '../Components/createClientForm'
import SideBar from '../Components/SideBar'
import { connect } from 'react-redux'
import ClientAdapter from '../apis/ClientAdapter'
import '../HeadQuarters.css'



class HeadQuarters extends Component {


 componentDidMount(){
	// console.log('I am in the HQ component did mount, and about to do a fetch?? hmmm, could I have done this in the App component...? ')
	ClientAdapter.getClients(this.props.match.params.id).then(res=>this.props.fetchUserClients(res.clients))
}
// props.fetchUserClients()
	

render(){
// console.log('inside HQ, props are:', this.props)
	return (
		<div>
			<div className='header1'>
				<h1>Head-Quarters</h1>
			</div>
			<CreateClientForm /> 
			<br/>

			<div className='section'>
				<div className='nav'>
					<SideBar clientId={this.props.match.params.id}/>
				</div>
				<div className='clients'>
				{this.props.match.params.id ? <ClientContainer /> : 'Loading...' }
				</div>
			</div><br/>
			<div className='footer'>
				<p></p>
			</div>
		</div>
	)

}
}

function mapDispatchToProps(dispatch){
	return {
		fetchUserClients: (res) => {
			dispatch({type:'FETCH_CLIENTS', payload: res})
		}
	}
}

function mapStateToProps(state){
	return {
		clients: state.clients,
		selectedUser: state.selectedUser
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(HeadQuarters)