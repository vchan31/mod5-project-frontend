import React, { Component } from 'react';

class  UpdateClientForm extends Component {


render(){
// console.log(this.props)
	return (
	<div>

		<form className="ui form" onSubmit={(e)=>this.props.handleSubmit(e)}>
		<div className="field">
		<label>Full Name</label>
		<input placeholder="Name" onChange={(e)=>this.props.handleOnChange(e)} type="text" id="name" value={this.props.state.name}/>
		</div>
		<div className="field">
		<label>Email</label>
		<input placeholder="Email" onChange={(e)=>this.props.handleOnChange(e)} type="text" id="email" value={this.props.state.email}/>
		</div>
		<div className="field">
		<label>Number</label>
		<input placeholder="Number" onChange={(e)=>this.props.handleOnChange(e)} type="text" id="number" value={this.props.state.number}/>
		</div>
		
		<button type="submit" className="ui button" >Submit</button>
		</form>
		

			


	</div>
)

}
}

export default UpdateClientForm

