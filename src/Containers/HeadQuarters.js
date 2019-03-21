import React, { Component } from 'react';
import ClientContainer from '../Components/ClientContainer'
import CreateClientForm from '../Components/createClientForm'
import SideBar from '../Components/SideBar'
import { connect } from 'react-redux'
import ClientAdapter from '../apis/ClientAdapter'



class HeadQuarters extends Component {


 componentDidMount(){
	
	ClientAdapter.getClients(this.props.match.params.id).then(res=>this.props.fetchUserClients(res.clients))
}
// props.fetchUserClients()
	

render(){
console.log('inside HQ, props are:', this.props)
	return (
		<div>

		<h1>HeadQuarters Page</h1>
		<CreateClientForm /> 
		<br/>
		<SideBar />
		{this.props.selectedUser ? <ClientContainer /> : 'Loading...' }

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