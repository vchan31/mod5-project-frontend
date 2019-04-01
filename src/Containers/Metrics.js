import React, { Component } from 'react';

class Metrics extends Component {

	state = {
		clients: [],
		clientTransactions: []
	}

componentDidMount(){
	fetch('http://localhost:3000/api/v1/clients').then(res=>res.json()).then(res=>{this.setState({
		clients: res
	})}).then(res=>{this.setState({
		clientTransactions: this.filterClientTransactions(this.state.clients)
			})
		}
	)
}

mapTransactions = () => {
	if(this.state.clientTransactions.length === 0){return 'Your currently have no pending transactions : ('

	}

	else {return this.state.clientTransactions.map((client)=>{
		return 'a transaction '
	})}
}

filterClientTransactions = (clients) => {
return clients.filter((client)=>{
	return client.user.id === parseInt(this.props.match.params.id)
})
}

render(){
console.log('these are users specific clients: ', this.state.clientTransactions)

	return(
	<div>
		{this.state.clients.length > 0 ? <h1>Metrics for {this.state.clients[0]['user']['name']}</h1> : 'loading'}<br/>
		<h2>transactions:<br/>{this.mapTransactions()}</h2>
		<br/><br/><br/>
		<h2>estimated GCI:</h2>

	</div>

	)
}

}


export default Metrics