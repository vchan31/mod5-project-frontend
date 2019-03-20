import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { withRouter } from "react-router-dom";
import ClientAdapter from '../apis/ClientAdapter'
import { connect } from 'react-redux'
import CreateNewUserForm from '../Components/createNewUserForm'

class Login extends Component {

goToHeadQuarters = () => {
  ClientAdapter.getClients().then(res=>this.props.fetchClients(res))
  this.props.history.push("/headquarters")
}





  render() {
    
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
        <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label ></label>
        </div><br/>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label ></label>
        </div>
        <br/>
        <button type="submit" className = 'ui primary button' onClick={()=>{

          // ClientAdapter.getClients().then(res=>props.fetchClients(res))
          this.goToHeadQuarters()}
        }> Login </button>
        </form>
</div>
      </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){

  return {
    fetchClients: (res) =>{
      console.log('Dispatching now!')
  dispatch({type:'FETCH_CLIENTS', payload: res})
    }
  } 
}

export default withRouter(connect(null,mapDispatchToProps)(Login));
