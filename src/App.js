import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './Containers/Login'
import Client from './Containers/Client'
import HeadQuarters from './Containers/HeadQuarters'
import './App.css';
import { connect } from 'react-redux'
import Metrics from './Containers/Metrics'
import TeamLeader from'./Containers/TeamLeader'
import TestLayout from './Containers/TestLayout'

class App extends Component {
	// state = {
	// 	clients:[],
	// 	selected_client: null
	// }

// componentDidMount(){
// 	fetch('http://localhost:3000/api/v1/users').then(res=>res.json()).then(res=>this.setState({
// 		clients:res[0]['clients']
// 	}))
// }

// handleSelectClient = (clientId) => {
// 	console.log(clientId)
// }
  render() {
  	// console.log('App.js and App props: ', this.props)
     
    return (
      <Fragment>
        <Switch>
            <Route 
              path="/client/:id" 
              render={(routerProps)=>{
                // console.log(routerProps)
                return <Client {...routerProps} />
              }} 
              />
            <Route path="/headquarters/:id" render={(routerProps)=><HeadQuarters {...routerProps} clients={this.props.clients} 
            />}/>
            <Route exact path='/TeamLeader' component={TeamLeader}/>
            <Route exact path="/" component={Login}/>
            <Route exact path="/metrics/:id" render={(routerProps)=>{return <Metrics {...routerProps}/>}}/>
            <Route exact path='/Home' component={TestLayout}/>
        </Switch>
      </Fragment>
    );
  }

}

  function mapStateToProps(state){

  	return {
  		clients: state.clients,
  		selectedUser: state.selectedUser
  	}
  }

  


export default withRouter(connect(mapStateToProps)(App));
