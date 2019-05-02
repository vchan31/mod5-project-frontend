import React, { Component } from 'react';
import { Image, Modal } from 'semantic-ui-react'

//copying heavily from the metrics component page!!
class TeamMetrics extends Component {

state = {
		clients: [],
		onlyTransactions: [],
		GCIbeforeSplit: 0
	}

componentDidMount(){
	fetch('http://localhost:3000/api/v1/clients').then(res=>res.json()).then(res=>{this.setState({
		clients: res
	})}).then(res=>{
		this.setState({
			onlyTransactions: this.filterClientsWithTransactions()
		})
	}).then(res=>{this.calculateGCI()})
}



filterClientsWithTransactions = () => {
	let myTransactions = []
this.state.clients.forEach((client)=>{
	if (client.transactions.length > 0) {
		let transaction = client.transactions[0]
		myTransactions.push(transaction)
	}
})
return myTransactions
}

calculateGCI = () => {
let totalGCI = []
let reducer = (accumulator, currentValue) => accumulator + currentValue;
let sumGCI = 0
this.state.onlyTransactions.forEach((transaction)=>{

// console.log('gross sale price is: ', parseInt(transaction.price))
let commission = (parseInt(transaction.price)) * .03
// console.log('commission on this sale is: ', commission)
totalGCI.push(commission)

sumGCI = totalGCI.reduce(reducer)
})
this.setState({GCIbeforeSplit: sumGCI})
// console.log(sumGCI) 

}

brokerSplit = () => {

return this.state.GCIbeforeSplit * 0.7
}

teamLeaderNet = () =>{
return this.state.GCIbeforeSplit * 0.3
}

changeToCurrencyString = (number) => {
	return ('$' + number.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

render(){
// console.log(this.state)
	return (
	<div>

	<Modal trigger={<button className="ui primary button">GCI</button>
}>
	<Modal.Header><h1>Team GCI Metrics</h1></Modal.Header>
	<Modal.Content image>
		<Modal.Description>
		<h3>Total GCI:</h3><h1>{this.changeToCurrencyString(this.state.GCIbeforeSplit)}</h1>
		<h3>GCI for Team Leader:</h3><h1>{this.changeToCurrencyString(this.teamLeaderNet())}</h1>
		
		
			</Modal.Description>
		</Modal.Content>
		</Modal>
	</div>
)

}
}

export default TeamMetrics

