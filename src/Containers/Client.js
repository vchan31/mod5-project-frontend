import React, { Component } from 'react';
import { connect } from 'react-redux'
import ScrumBoard from '../Components/ScrumBoard'
import UpdateClientForm from '../Components/updateClientForm'


class Client extends Component {

	state = {
	name: "",
	email: "",
	number: ""
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
const targetClient = this.props.clients.find((client)=>{
	return client.id === parseInt(this.props.match.params.id)
})
	this.setState({
		name: targetClient.name,
		email: targetClient.email,
		number: targetClient.number
	})
}

currentStage = () => {
	const targetClient = this.props.clients.find((client)=>{
	return client.id === parseInt(this.props.match.params.id)
})
	if (targetClient.budget == null && targetClient.financing == null) {return 'OnBoarding'}
}

render() {
// console.log(targetClient)

// console.log('Client props:', props)
// console.log('props from react route: ', props.match.params.id)

const targetClient = this.props.clients.find((client)=>{
	return client.id === parseInt(this.props.match.params.id)
})


	return (
		<div>
		<h1>Client Page</h1>

		<p>{targetClient ? targetClient.name : 'no client selected!' }</p>
		<p>{targetClient ? targetClient.number : 'no client selected!'}</p>
				<p>{targetClient ? targetClient.email : 'no client selected!'}</p>

		<p>current stage: <b>{this.currentStage()}</b></p>

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

	<UpdateClientForm clientId={targetClient.id} targetClient={targetClient} state={this.state}
	handleSubmit={this.handleSubmit} handleOnChange={this.handleOnChange}/>

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