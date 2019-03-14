import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { withRouter } from "react-router-dom";


class Login extends Component {

goToHeadQuarters = () => {
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

        <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" onClick={()=>{this.goToHeadQuarters()}}/>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
