import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {  Modal } from 'semantic-ui-react'


class  Prequalification extends Component {

state = {
	days: '',
	budget: '',
	income: '',
	area: '',
	financing: '',
	moveInDate: '',
	assets: '',
	apt_type: '',
	size: '',
}

handleOnChange = (e) => {
	if (e.target.id === 'days'){
this.setState({
	days: e.target.value
})}
	else if (e.target.id === 'budget') {this.setState({budget: e.target.value})}
	else if (e.target.id === 'income') {this.setState({income: e.target.value})}
	else if (e.target.id === 'area') {this.setState({area: e.target.value})}
	else if (e.target.id === 'financing') {this.setState({financing: e.target.value})}
	else if (e.target.id === 'moveInDate') {this.setState({moveInDate: e.target.value})}
	else if (e.target.id === 'assets') {this.setState({assets: e.target.value})}
	else if (e.target.id === 'apt_type') {this.setState({apt_type: e.target.value})}
	else if (e.target.id === 'size') {this.setState({size: e.target.value})}
}

handleSubmit = (e) => {
	e.preventDefault()
	console.log('submited on prequal')
	fetch(`http://localhost:3000/api/v1/clients/${this.props.match.params.id}`, 
	{
		method: 'PATCH',
		headers: {
			"Content-Type": "application/json",
        	Accept: "application/json"
		},
		body: JSON.stringify({
			days_searching: this.state.days,
			budget: this.state.budget,
			annual_income: this.state.income,
			area_of_interest: this.state.area,
			financing: this.state.financing,
			moving_date: this.state.moveInDate,
			net_assets: this.state.assets,
			apt_type: this.state.apt_type,
			size: this.state.size
		})
	}).then(res=>{console.log(res)
		alert('Prequalification submited and saved!!')
	})

}

render(){
// console.log(this.props)
	return (


	<div>

	<Modal trigger={<button className="ui primary button">Prequal</button>}>
	<Modal.Header> <h1> Prequalification</h1></Modal.Header>
		<Modal.Content>
		<Modal.Description>
		<form className="ui form" onSubmit={(e)=>this.handleSubmit(e)}>
		<div className="field">
		<label>Days Searching:</label>
		<input placeholder="Days searching" onChange={(e)=>this.handleOnChange(e)} type="text" id="days" value={this.state.days}/>
		</div>
		<div className="field">
		<label>Budget:</label>
		<input placeholder="budget" onChange={(e)=>this.handleOnChange(e)} type="text" id="budget" value={this.state.budget}/>
		</div>
		<div className="field">
		<label>Annual Income:</label>
		<input placeholder="Income" onChange={(e)=>this.handleOnChange(e)} type="text" id="income" value={this.state.income}/>
		</div>
		<div className="field">
		<label>Area of Interest:</label>
		<input placeholder="Area" onChange={(e)=>this.handleOnChange(e)} type="text" id="area" value={this.state.area}/>
		</div>
		<div className="field">
		<label>Financing amount:</label>
		<input placeholder="Financing" onChange={(e)=>this.handleOnChange(e)} type="text" id="financing" value={this.state.financing}/>
		</div>
		<div className="field">
		<label>Moving Date:</label>
		<input placeholder="Move In Date" onChange={(e)=>this.handleOnChange(e)} type="text" id="moveInDate" value={this.state.moveInDate}/>
		</div>
		<div className="field">
		<label>Assets:</label>
		<input placeholder="Net Assets" onChange={(e)=>this.handleOnChange(e)} type="text" id="assets" value={this.state.assets}/>
		</div>
		<div className="field">
		<label>Co-op / Condo:</label>
		<input placeholder="apartment type" onChange={(e)=>this.handleOnChange(e)} type="text" id="apt_type" value={this.state.apt_type}/>
		</div>
		<div className="field">
		<label>Size:</label>
		<input placeholder="apartment size" onChange={(e)=>this.handleOnChange(e)} type="text" id="size" value={this.state.size}/>
		</div>
		
		<button type="submit" className="ui button" >Submit</button>
		</form>
		

		</Modal.Description>
		</Modal.Content>
		</Modal>
	</div>
)

	}
}



export default withRouter(Prequalification)