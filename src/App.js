import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './Containers/Login'
import Client from './Containers/Client'
import HeadQuarters from './Containers/HeadQuarters'
import './App.css';


class App extends Component {

	state = {
		clients:[]
	}

componentDidMount(){
	fetch('http://localhost:3000/api/v1/users').then(res=>res.json()).then(res=>this.setState({
		clients:res[0]['clients']
	}))
}


  render() {
  	// console.log(this.state)

    return (
      <Fragment>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/headquarters" render={()=><HeadQuarters clients={this.state.clients}/>}/>
      <Route path="/client" component={Client}/>


      </Switch>
      
      </Fragment>
    );
  }
}

export default withRouter(App);
