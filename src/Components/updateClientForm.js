import React, { Component } from 'react';
import {   Image, Modal } from 'semantic-ui-react'


class  UpdateClientForm extends Component {


render(){
// console.log(this.props)
	return (
	<div>

	<Modal trigger={<button className="ui button" onClick={this.props.handleEditClick}>Edit</button>
}>
	<Modal.Header><h1>Edit</h1></Modal.Header>
	<Modal.Content image>
		<Image wrapped size='medium' src='http://localhost:3002/img_avatar3.png' />
		<Modal.Description>
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
		
		<button type="submit" className="ui primary button" >Submit</button>
		</form>
		

			</Modal.Description>
		</Modal.Content>
		</Modal>
	</div>
)

}
}

export default UpdateClientForm

