import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class CreateNewUserForm extends Component {

state = {
name: ""

}

handleSubmit = (e) => {
	e.preventDefault()
	console.log('create a new user please!!!',this.state.name)
	

	fetch('http://localhost:3000/api/v1/users', {
    		method: 'POST',
    		headers: {
					  'Content-Type': 'application/json',
					  'Accept': 'application/json'},
			body: JSON.stringify({
				name: this.state.name
			})
    	}).then(res=>{alert('User Created! please enter your username to login')
    		console.log(res)})
// I should either refresh or push the user to the HeadQuarters page, 
}

handleOnChange = (e) => {
this.setState({
	name: e.target.value
})
}

render(){


	return(
		<div>
		       <Modal trigger={ <Button className='ui primary button'>New User</Button>}>
		       <Modal.Header>New User</Modal.Header>
		       <Modal.Content image>
		       	<Image wrapped size='medium' src='http://localhost:3002/img_avatar3.png' />
		       	<Modal.Description>
		        <Header>Please fill out:</Header>
		        <form className="ui form" onSubmit={(e)=>this.handleSubmit(e)}>
				<div className="field">
				<label>Full Name</label>
				<input placeholder="Name" onChange={(e)=>this.handleOnChange(e)} type="text" id="name" value={this.state.name}/>
				</div>
		<div className="field">
		<div className="ui checkbox">
		<input type="checkbox" className="hidden" readOnly="" tabIndex="0"/>
		<label>I agree to the Terms and Conditions</label></div>
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


export default CreateNewUserForm