import React, { Component } from 'react';

class  Prequalification extends Component {

state = {
	days: '',
	budget: '',
	income: '',
	area: '',
	financing: '',
	moveInDate: '',
	assets: '',
	type: '',
	size: '',


}

handleOnChange = () => {

}

handleSubmit = () => {

}

render(){
// console.log(this.props)
	return (
	<div>
		<h1> Prequalification</h1>
		<form className="ui form" onSubmit={(e)=>this.handleSubmit(e)}>
		<div className="field">
		<label>Days Searching:</label>
		<input placeholder="Name" onChange={(e)=>this.handleOnChange(e)} type="text" id="days" value={this.state.days}/>
		</div>
		<div className="field">
		<label>Budget:</label>
		<input placeholder="Email" onChange={(e)=>this.handleOnChange(e)} type="text" id="budget" value={this.state.budget}/>
		</div>
		<div className="field">
		<label>Annual Income:</label>
		<input placeholder="Number" onChange={(e)=>this.handleOnChange(e)} type="text" id="income" value={this.state.income}/>
		</div>
		<div className="field">
		<label>Area of Interest:</label>
		<input placeholder="Number" onChange={(e)=>this.handleOnChange(e)} type="text" id="income" value={this.state.area}/>
		</div>
		<div className="field">
		<label>Financing amount:</label>
		<input placeholder="Number" onChange={(e)=>this.handleOnChange(e)} type="text" id="income" value={this.state.financing}/>
		</div>
		<div className="field">
		<label>Moving Date:</label>
		<input placeholder="Number" onChange={(e)=>this.handleOnChange(e)} type="text" id="income" value={this.state.moveInDate}/>
		</div>
		<div className="field">
		<label>Assets:</label>
		<input placeholder="Number" onChange={(e)=>this.handleOnChange(e)} type="text" id="income" value={this.state.assets}/>
		</div>
		<div className="field">
		<label>Co-op / Condo:</label>
		<input placeholder="Number" onChange={(e)=>this.handleOnChange(e)} type="text" id="income" value={this.state.type}/>
		</div>
		<div className="field">
		<label>Size:</label>
		<input placeholder="Number" onChange={(e)=>this.handleOnChange(e)} type="text" id="income" value={this.state.size}/>
		</div>
		
		<button type="submit" className="ui button" >Submit</button>
		</form>
		

			


	</div>
)

}
}

export default Prequalification