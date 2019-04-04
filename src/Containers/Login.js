import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import CreateNewUserForm from '../Components/createNewUserForm'
// import wallpaper from '../6873739-manhattan-wallpaper(1).jpg'

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

  if(targetUser){this.props.sendUserToStore(targetUser.id)
    this.props.history.push(`/headquarters/${targetUser.id}`)}
  else if (this.state.username === 'Team Leader'){
    this.props.sendAllUsersToStore(this.state.users)
    this.props.history.push('/TeamLeader')
  }
    
  else { alert('this user does not exist, please create a new User')
    }
}

handleOnChange = (e) => {
this.setState({
  username: e.target.value
})
}

  render() {
    // console.log('Login Renders! .... also its props:', this.props)
    // console.log(this.state)
    return (
        <div>
        
       
      <div className="App">
      <div className='wrapper'>
        <header className="App-header">
        {/*<h1 className='Header'>DOUGLAS ELLIMAN</h1>*/}
        <div className='image1'>
        <img className='LogoImg' src='http://localhost:3002/DE_logo.png' alt='shaddup react!'/>
        </div>
                <div className = 'base'>
                <img className='backgroundimage' src='http://localhost:3002/6873739-manhattan-wallpaper.jpg' alt='shaddup react!'/>
                </div>
          {<img src={logo} className="App-logo" alt="logo" />}
          <br/>
        <div className='ui container'>
            <form onSubmit={(e)=>{

              // ClientAdapter.getClients().then(res=>props.fetchClients(res))
              this.goToHeadQuarters(e)}}>
            <div>
              <input type="text" name="username" placeholder="Username" onChange={(e)=>{this.handleOnChange(e)}}value={this.state.username}/>
              <label ></label>
            </div><br/>
           {/* <div>
              <input type="password" name="password" placeholder="Password" />
              <label ></label>
            </div>*/}
            <br/>
            <button type="submit" className = 'ui primary button'
            > Login </button>
            </form>
            <br/>
        <CreateNewUserForm />
    </div>
        </header>
        </div>
      </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){

  return {
    sendUserToStore: (clientId) =>{
      // console.log('sending User... to Store!')
  dispatch({type:'SELECT_USER', payload: clientId})
    },
   sendAllUsersToStore: (users) => {
  dispatch({type:'SET_USERS', payload: users})
   } 
  } 
}

export default withRouter(connect(null,mapDispatchToProps)(Login));
