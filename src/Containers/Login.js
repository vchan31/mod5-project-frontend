import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { withRouter } from "react-router-dom";
import ClientAdapter from '../apis/ClientAdapter'
import { connect } from 'react-redux'

class Login extends Component {

goToHeadQuarters = () => {
  ClientAdapter.getClients().then(res=>this.props.fetchClients(res))
  this.props.history.push("/headquarters")
}


  render() {
    
    return (
        
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
        <input type="submit" value="Login" onClick={()=>{

          // ClientAdapter.getClients().then(res=>props.fetchClients(res))
          this.goToHeadQuarters()}
        }/>
        </form>
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
