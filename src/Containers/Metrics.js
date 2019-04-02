import React, { Component } from 'react';
import Transactions from '../Components/Transactions'

class Metrics extends Component {

	state = {
		clients: [],
		clientTransactions: [],
		onlyTransactions: [],
		GCIbeforeSplit: 0
	}

componentDidMount(){
	fetch('http://localhost:3000/api/v1/clients').then(res=>res.json()).then(res=>{this.setState({
		clients: res
	})}).then(res=>{this.setState({
		clientTransactions: this.filterClientTransactions(this.state.clients)
			})
		}
	).then(res=>{
		this.setState({
			onlyTransactions: this.filterClientsWithTransactions()
		})
	}).then(res=>{this.calculateGCI()})
}

mapTransactions = () => {
	if(this.state.clientTransactions.length === 0){return 'Your currently have no pending transactions : ('

	}

	else {return this.state.clientTransactions.map((client)=>{
		return <Transactions transactions={client.transactions} key={client.id}/>
	})}
}

//this function isolates the clients that belong to this particular user
filterClientTransactions = (clients) => {
return clients.filter((client)=>{
	return client.user.id === parseInt(this.props.match.params.id)
})
}

filterClientsWithTransactions = () => {
	let myTransactions = []
this.state.clientTransactions.forEach((client)=>{
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

changeToCurrencyString = (number) => {
	return ('$' + number.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

brokerSplit = () => {

return this.state.GCIbeforeSplit * 0.7
}

render(){
// console.log(this.state)

	return(

	<div>
		{this.state.clients.length > 0 ? <h1>Metrics for {this.state.clients[0]['user']['name']}</h1> : 'loading'}<br/>
		{this.state.clients.length > 0 ? <div><h2>Your current Transactions:</h2> <br/>{this.mapTransactions()}</div> : 'loading'}
		<br/><br/><br/>
		<h2>Estimated Gross GCI: </h2>
		<h3>{this.changeToCurrencyString(this.state.GCIbeforeSplit)}</h3>
		<br/>
		<h2>After broker split:</h2>
		{this.state.GCIbeforeSplit != 0 ? <h3>{this.changeToCurrencyString(this.brokerSplit())}</h3> : <h3> $0 </h3>}

	</div>

	)
}

}


export default Metrics