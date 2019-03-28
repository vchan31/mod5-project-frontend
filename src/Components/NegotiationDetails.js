import React, { Component } from 'react';
import { Button, Image, Modal, Header, Confirm } from 'semantic-ui-react'


class NegotiationDetails extends Component {
state = {open: true,
	interestRate: 4,
	term: 30,
	purchasePrice: "",
	monthlyCost: '',
	
}

close = () => this.setState({
	open: false,

})

handleOnChange = (e) => {

if (e.target.id == 'Purchase Price')
	{this.setState({purchasePrice: e.target.value})}
else if (e.target.id == 'monthlyCost'){
	this.setState({monthlyCost: e.target.value})
}

}

createTransaction = () => {
	fetch('http://localhost:3000/api/v1/transactions', {
    		method: 'POST',
    		headers: {
					  'Content-Type': 'application/json',
					  'Accept': 'application/json'},
			body: JSON.stringify({
				price: this.state.purchasePrice,
				monthly_cost: this.state.monthlyCost,
				client_id: this.props.clientInfo.id
			})
    	}).then(res=>console.log(res))
}

monthlyMortgagePayment = (principle, interest, term) => {
return (principle * interest * (Math.pow(1 + interest, term)) / (Math.pow(1 + interest, term) - 1))
}

changeToNumber = (number) => {
	return Number(number.replace(/[^0-9.-]+/g,""))
}

changeToCurrencyString = (number) => {
	return (number.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

calculateDebtIncome = () => {
let income = this.changeToNumber(this.props.clientInfo.annual_income)
let mortgagePayment = this.monthlyMortgagePayment(this.changeToNumber(this.props.clientInfo.financing),(this.state.interestRate /100 / 12), (this.state.term * 12))
let maintenance = 1400

return (mortgagePayment + maintenance) / income

}

render (){

console.log(this.props.clientInfo.id)
return(

<div>

<Modal open={this.state.open}>

<Modal.Header>Apartment information</Modal.Header>
<Modal.Content image>
<Image wrapped size='medium' src='http://localhost:3002/img_avatar3.png' />
 <Modal.Description>
 <Header>Congratulations on finding an Aparment!</Header>
<p> Lets help you crunch some numbers!</p>
Purchase Price: <input onChange={(e)=>this.handleOnChange(e)} type='number' 
value={this.state.purchasePrice} id='Purchase Price'></input> <br/>
monthly cost (taxes too): <input onChange={(e)=>this.handleOnChange(e)} type='number' value={this.state.monthlyCost}
id='monthlyCost'></input>

<br/>
interest Rate: 4%
<br/>
30 year 
<br/>
<br/>
monthly mortgage payment: ${this.changeToCurrencyString(this.monthlyMortgagePayment(this.changeToNumber(this.props.clientInfo.financing),(this.state.interestRate/ 100 / 12), (this.state.term * 12)))}
<br/>
<br/>
<p><b>Your Debt to income Ratio: {(this.calculateDebtIncome()*100).toFixed(2) + '%'} </b></p>
 </Modal.Description>
</Modal.Content>
<br/>
 <Button onClick={this.close}>K THX!</Button>
 {<Button className="ui primary button" onClick={this.createTransaction}> Submit</Button> }
 <br/>

</Modal>
</div>


	)
}
	}


export default NegotiationDetails