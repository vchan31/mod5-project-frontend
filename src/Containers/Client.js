import React, { Component } from 'react';
import { connect } from 'react-redux'
import ScrumBoard from '../Components/ScrumBoard'
import UpdateClientForm from '../Components/updateClientForm'
import Prequalification from '../Components/Prequalification'


class Client extends Component {

	state = {
	name: "",
	email: "",
	number: "",
	status: null,
	client: null
}

componentDidMount(){
	fetch(`http://localhost:3000/api/v1/clients/${this.props.match.params.id}`).then(res=>res.json()).then(
		res=>{

		if (res.budget == null && res.financing == null) {this.setState({status: 'OnBoarding', client: res})
		}
		// else if () {
		// }
	}
	)

}

handleOnChange = (e) => {
if (e.target.id === "name") {
      this.setState({
        name: e.target.value
      });
    }
    if (e.target.id === "email") {
      this.setState({
        email: e.target.value
      });
    }
    if (e.target.id === "number") {
      this.setState({
        number: e.target.value
      });
  }
}

handleSubmit = (e) => {
	e.preventDefault()

	console.log('I hit the submit button!')
	// fetch(`http://localhost:3000/api/v1/clients/${this.props.match.params.id}`, 
	// {
	// 	method: 'PATCH',
	// 	headers: {
	// 		"Content-Type": "application/json",
 //        	Accept: "application/json"
	// 	},
	// 	body: JSON.stringify({
	// 		name: this.state.name,
	// 		number: this.state.number,
	// 		email: this.state.email
	// 	})
	// }).then(res=>console.log(res))

}

handleEditClick = () => {

	this.setState({
		name: this.state.client.name,
		email: this.state.client.email,
		number: this.state.client.number
	})
}


prequalDone = () => {

}

render() {
// console.log('Client props:', this.props)
// console.log(this.state)
	return (
		<div>
		<h1>Client Page</h1>

		<p>{this.state.client ? this.state.client.name : 'no client selected!' }</p>
		<p>{this.state.client ? this.state.client.number : 'no client selected!'}</p>
				<p>{this.state.client ? this.state.client.email : 'no client selected!'}</p>

		<p>current stage: <b>{this.state.status}</b></p>
		<p>precentage to closing: </p>

<button className="ui button" onClick={this.handleEditClick}>Edit</button>
<button className="ui button">Save Changes</button>

		<ScrumBoard />

		<p>current action:</p>
		<p>next action</p>
		<p>suggestions??</p>

<br/>
<br/>
<br/>
<br/>
	{this.state.client ? <UpdateClientForm clientId={this.state.client.id} targetClient={this.state.client} state={this.state}
	handleSubmit={this.handleSubmit} handleOnChange={this.handleOnChange}/> : null}
	

<br/>
<br/>
<br/>
<br/>

<Prequalification />


<br/>
<br/>
<br/>
<br/>
<button className="ui button">prequal Done</button>


	</div>
	)
}
}

function mapStateToProps(state){
	return {
		selectedClient: state.selectedClient,
		clients: state.clients
	}
}

export default connect(mapStateToProps)(Client)