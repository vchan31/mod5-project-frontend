import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { withRouter } from "react-router-dom";
import ClientAdapter from '../apis/ClientAdapter'
import { connect } from 'react-redux'
import CreateNewUserForm from '../Components/createNewUserForm'

class Login extends Component {

state= {
  username: "",
  users: []
}
componentDidMount(){
  fetch("http://localhost:3000/api/v1/users").then(res=>res.json()).then(res=>{
    this.setState({
      users: res
    })
  })
}

goToHeadQuarters = (e) => {
  e.preventDefault()
let targetUser = this.state.users.find((user)=>{
  return user.name === this.state.username
})
  this.props.sendUserToStore(targetUser.id)
  // ClientAdapter.getUsers().then(res=>this.props.fetchClients(res))
  this.props.history.push(`/headquarters/${targetUser.id}`)
}

handleOnChange = (e) => {
this.setState({
  username: e.target.value
})
}

  render() {
    // console.log(this.state)
    return (
        <div>
        <CreateNewUserForm />
      <div className="App">

        <header className="App-header">
        <h1 className='Header'>DOUGLAS ELLIMAN</h1>
        <h2>Login</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className='ui container'>
        <form onSubmit={(e)=>{

          // ClientAdapter.getClients().then(res=>props.fetchClients(res))
          this.goToHeadQuarters(e)}}>
        <div>
          <input type="text" name="username" placeholder="Username" onChange={(e)=>{this.handleOnChange(e)}}value={this.state.username}/>
          <label ></label>
        </div><br/>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label ></label>
        </div>
        <br/>
        <button type="submit" className = 'ui primary button'
        > Login </button>
        </form>
</div>
      </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){

  return {
    sendUserToStore: (clientId) =>{
      console.log('sending client to Store!')
  dispatch({type:'SELECT_USER', payload: clientId})
    }
  } 
}

export default withRouter(connect(null,mapDispatchToProps)(Login));
