import React, { Component } from 'react';

class  CreateClientForm extends Component {

// console.log(props)
state = {
	name: "",
	email: "",
	number: ""
}

handleSubmit = () => {
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
			user_id: 1
		})
	}).then(res=>console.log(res))

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

	return (
		<div>
		
		name: <input onChange={(e)=>this.handleOnChange(e)} type="text" id="name" value={this.state.name}/><br/>
  		email: <input onChange={(e)=>this.handleOnChange(e)} type="text" id="email" value={this.state.email}/><br/>
  		number: <input onChange={(e)=>this.handleOnChange(e)} type="text" id="number" value={this.state.number}/><br/>
  		<button onClick={()=>this.handleSubmit()}>submit</button> <br/>
		<button>new lead</button>


		</div>
	)

}
}

export default CreateClientForm