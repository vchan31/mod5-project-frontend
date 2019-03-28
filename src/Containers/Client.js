import React, { Component } from 'react';
import { connect } from 'react-redux'
import UpdateClientForm from '../Components/updateClientForm'
import Prequalification from '../Components/Prequalification'
import ClientInfo from '../Components/ClientInfo'
import DndTest from '../Dnd/DndTest'
import { Progress } from 'semantic-ui-react'
// import DebtIncome from '../Components/DebtIncome'
import NegotiationDetails from '../Components/NegotiationDetails'
import '../Client.css'



class Client extends Component {

	state = {
	name: "",
	email: "",
	number: "",
	status: null,
	status2: null,
	client: null,
	accepted_offer: null
}

componentDidMount(){
	fetch(`http://localhost:3000/api/v1/clients/${this.props.match.params.id}`).then(res=>res.json()).then(
		res=>{
		this.setState({status: res.status, client: res, accepted_offer: res.accepted_offer})
		
		
	}
	)

}
// For Edit client form....
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
	fetch(`http://localhost:3000/api/v1/clients/${this.props.match.params.id}`, 
	{
		method: 'PATCH',
		headers: {
			"Content-Type": "application/json",
        	Accept: "application/json"
		},
		body: JSON.stringify({
			name: this.state.name,
			number: this.state.number,
			email: this.state.email
		})
	}).then(res=>console.log(res))

}

handleScrumSave = () => {
console.log('saved button clicked')
if (this.state.status2 === null){alert('No changes to be made!!')}

	else if (this.state.status2 === 'Accepted Offer')
	{
		fetch(`http://localhost:3000/api/v1/clients/${this.props.match.params.id}`, 
		{
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
	        	Accept: "application/json"
			},
			body: JSON.stringify({
				status: this.state.status2,
				accepted_offer: true	
			})
		}).then(res=>{console.log(res)
			alert('Changes to the Status has been Saved!')
			this.setState({accepted_offer: true})
		})

	}

	else {
		fetch(`http://localhost:3000/api/v1/clients/${this.props.match.params.id}`, 
		{
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
	        	Accept: "application/json"
			},
			body: JSON.stringify({
				status: this.state.status2,	
			})
		}).then(res=>{console.log(res)
			alert('Changes to the Status has been Saved!')
		})
	}
}

handleEditClick = () => {

	this.setState({
		name: this.state.client.name,
		email: this.state.client.email,
		number: this.state.client.number
	})
}

currentAction = () => {
	if(this.state.status2 === null){

		if (this.state.status === 'OnBoarding') {return 'Schedule an appointment to prequalify client as soon as possible'}
		else if (this.state.status === 'Showings'){return 'Keep showing and follow up after each showing!'}
		else if (this.state.status === 'Negotiations'){return 'Do a Comparable of the unit to find the best starting offering price, and follow up with the listing agent; keep negotiating until an accepted offer!'}
		else if (this.state.status === 'Accepted Offer'){return 'Make sure buyer starts the mortgage process , follow up to have a contract out from the sellers attorney,'}
		else if (this.state.status === 'Contract Negotiations'){return 'start gathering the buildings financials, board package and mortgage requirements'}
		else if (this.state.status === 'Signed Contract'){return 'Start board package with client and make sure mortgage process in under way'}
		else if (this.state.status === 'Board Package'){return 'Gather all the paper work; prep client for interview if applicable; schedule an appraisal if financing; and schedule a walkthrough with seller agent/seller.'}
		else if (this.state.status === 'Closing'){return 'Prepare client the day! and do not forget your fee for service invoice!'}
	}

	else if (this.state.status2==="OnBoarding"){return 'Schedule an appointment to prequalify client as soon as possible'}
	else if (this.state.status2==="Showings"){return 'Keep showing and follow up after each showing!'}
	else if (this.state.status2 === 'Negotiations'){return 'Do a Comparable of the unit to find the best starting offering price, and follow up with the listing agent; keep negotiating until an accepted offer!'}
	else if (this.state.status2 === 'Accepted Offer'){return 'Make sure buyer starts the mortgage process , follow up to have a contract out from the sellers attorney,'}
	else if (this.state.status2 === 'Contract Negotiations'){return 'start gathering the buildings financials, board package and mortgage requirements'}
	else if (this.state.status2 === 'Signed Contract'){return 'Start board package with client and make sure mortgage process in under way'}
	else if (this.state.status2 === 'Board Package'){return 'Gather all the paper work; prep client for interview if applicable; schedule an appraisal if financing; and schedule a walkthrough with seller agent/seller.'}
	else if (this.state.status2 === 'Closing'){return 'Prepare client the closing and give them a closing gift! and do not forget your fee for service invoice!'}

}

nextAction = () => {
	if(this.state.status2 === null){

		if (this.state.status === 'OnBoarding') {return 'Showings'}
		else if (this.state.status === 'Showings'){return 'Seller negotiations'}
		else if (this.state.status === 'Negotiations'){return 'Accepted Offer'}
		else if (this.state.status === 'Accepted Offer'){return 'Contract Negotiations'}
		else if (this.state.status === 'Contract Negotiations'){return 'Contract Signed'}
		else if (this.state.status === 'Signed Contract'){return 'Board Package'}
		else if (this.state.status === 'Board Package'){return 'The Closing'}
		else if (this.state.status === 'Closing'){return 'Client thank you gift!'}

	}

	else if (this.state.status2==='OnBoarding'){return 'Showings'}
	else if (this.state.status2==='Showings'){return 'Seller negotiations'}
	else if (this.state.status2 === 'Showings'){return 'Seller negotiations'}
	else if (this.state.status2 === 'Negotiations'){return 'Accepted Offer'}
	else if (this.state.status2 === 'Accepted Offer'){return 'Contract Negotiations'}
	else if (this.state.status2 === 'Contract Negotiations'){return 'Contract Signed'}
	else if (this.state.status2 === 'Signed Contract'){return 'Board Package'}
	else if (this.state.status2 === 'Board Package'){return 'The Closing'}
	else if (this.state.status2 === 'Closing'){return 'Client thank you gift!'}
}

currentStage = () => {
	if (this.state.status2 === null && this.state.status === null){return 'loading...'}
		else if (this.state.status2 === 'OnBoarding'){return 'OnBoarding'}
		else if (this.state.status2 === 'Showings'){return 'Showings'}
		else if (this.state.status2 === 'Negotiations'){return 'Negotiations'}
		else if (this.state.status2 === 'Accepted Offer'){return 'Accepted Offer'}
		else if (this.state.status2 === 'Contract Negotiations'){return 'Contract Negotiations'}
		else if (this.state.status2 === 'Signed Contract'){return 'Signed Contract'}
		else if (this.state.status2 === 'Board Package'){return 'Board Package'}
		else if (this.state.status2 === 'Closing'){return 'Closing!'}

	
	
	else if (this.state.status2 === null){return this.state.status}
}


 calculatePercent=()=>{

if(this.state.status2 === null){

		if (this.state.status === 'OnBoarding') {return 12.5}
		else if (this.state.status === 'Showings'){return 25}
		else if (this.state.status === 'Negotiations'){return 37.5}
		else if (this.state.status === 'Accepted Offer'){return 50}
		else if (this.state.status === 'Contract Negotiations'){return 62.5}
		else if (this.state.status === 'Signed Contract'){return 75}
		else if (this.state.status === 'Board Package'){return 87.5}
		else if (this.state.status === 'Closing'){return 100}

	}


		else if(this.state.status2==='OnBoarding'){return 12.5}
		else if (this.state.status2==='Showings'){return 25}
		else if (this.state.status2==='Negotiations'){return 37.5}
		else if (this.state.status2==='Accepted Offer'){return 50}
		else if (this.state.status2==='Contract Negotiations'){return 62.5}
		else if (this.state.status2==='Signed Contract'){return 75}
		else if (this.state.status2==='Board Package'){return 87.5}
		else if (this.state.status2==='Closing'){return 100}		
}


prequalDone = () => {

}

dropOnChange = (drId) => {

	if (drId === 'dr1'){
		this.setState({status2:"OnBoarding"})
	}
	else if (drId=== 'dr2'){
		this.setState({status2:"Showings"})
	}
	else if (drId=== 'dr3'){
		this.setState({status2:"Negotiations"})
	}
	else if (drId=== 'dr4'){
		this.setState({status2:"Accepted Offer"})
	}
	else if (drId=== 'dr5'){
		this.setState({status2:"Contract Negotiations"})
	}
	else if (drId=== 'dr6'){
		this.setState({status2:"Signed Contract"})
	}
	else if (drId=== 'dr7'){
		this.setState({status2:"Board Package"})
	}
	else if (drId=== 'dr8'){
		this.setState({status2:"Closing"})
	}
}



render() {
	// console.log(this.state)
	// console.log('Client props:', this.props.match.params.id)
	return (
<div>
	{this.state.status2 === 'Negotiations' ? <NegotiationDetails clientInfo={this.state.client}/> : null}		
	<div className='header2'>
	<h1>Client Page</h1>
	</div>
	<br/>
	<div className='stats'>
		<h2>{this.state.client ? this.state.client.name : 'no client selected!' }</h2>
		<p>{this.state.client ? this.state.client.number : 'no client selected!'}</p>
		<p>{this.state.client ? this.state.client.email : 'no client selected!'}</p>

		<p>current stage: <b>{this.currentStage()}</b></p>
		<p>precentage to closing: </p>
		<Progress className='ui blue progress'  percent={this.calculatePercent()} progress/>
{this.state.client ? <ClientInfo info={this.state.client}/> : "loading"}
<br/>
<Prequalification />
	</div>

<br/>
	<div className='topright'>
	{this.state.client ? <UpdateClientForm clientId={this.state.client.id} targetClient={this.state.client} state={this.state}
	handleSubmit={this.handleSubmit} handleOnChange={this.handleOnChange} handleEditClick={this.handleEditClick}/> : null}
	<br/>
		<button className="ui button" onClick={this.handleScrumSave}>Save</button>
	</div>
<br/>
<br/>
<br/>
		<div className='scrumboard'>
	<h1>Client Stages</h1>
	<DndTest status={this.state.status} dropOnChange={this.dropOnChange} client={this.state.client}/>
		</div>

<br/>
<br/>
<br/>
<br/>
		<p>current suggested action(s): <b>{this.state.client ? this.currentAction() : 'loading'}</b></p>
		<p>next action: <b>{this.state.client ? this.nextAction() : 'loading'}</b> </p>

<br/>
<br/>
<br/>
<br/>











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