import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";


class  CreateClientForm extends Component {

state = {
	name: "",
	email: "",
	number: ""
}

handleSubmit = (e) => {
	e.preventDefault()
	console.log('I hit the submit button!')

	fetch('http://localhost:3000/api/v1/clients', 
	{
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
        	Accept: "application/json"
		},
		body: JSON.stringify({
			name: this.state.name,
			number: this.state.number,
			email: this.state.email,
			user_id: this.props.match.params.id,
			status: 'OnBoarding'
		})
	}).then(res=>{
		alert('Client Created!!')
		window.location.reload();

	})

}

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

render(){
// console.log(this.props.match.params.id)

	return (
	<div>

			<Modal trigger={<Button>New Client</Button>}>

		    <Modal.Header>Profile Picture</Modal.Header>
		    <Modal.Content image>
		      <Image wrapped size='medium' src='http://localhost:3001/img_avatar3.png' />
		      <Modal.Description>
		        <Header>Modal Header</Header>
		        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
		        <form className="ui form" onSubmit={(e)=>this.handleSubmit(e)}>
		<div className="field">
		<label>Full Name</label>
		<input placeholder="Name" onChange={(e)=>this.handleOnChange(e)} type="text" id="name" value={this.state.name}/>
		</div>
		<div className="field">
		<label>Email</label>
		<input placeholder="Email" onChange={(e)=>this.handleOnChange(e)} type="text" id="email" value={this.state.email}/>
		</div>
		<div className="field">
		<label>Number</label>
		<input placeholder="Number" onChange={(e)=>this.handleOnChange(e)} type="text" id="number" value={this.state.number}/>
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
		    <Modal.Actions>
		      
		    </Modal.Actions>
  </Modal>


	</div>
)

}
}

export default withRouter(CreateClientForm)
		// name: <input onChange={(e)=>this.handleOnChange(e)} type="text" id="name" value={this.state.name}/><br/>
  // 		email: <input onChange={(e)=>this.handleOnChange(e)} type="text" id="email" value={this.state.email}/><br/>
  // 		number: <input onChange={(e)=>this.handleOnChange(e)} type="text" id="number" value={this.state.number}/><br/>
  // 		<button onClick={()=>this.handleSubmit()}>submit</button> <br/>
		// <button>new lead</button>