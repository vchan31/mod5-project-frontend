import React, { Component } from 'react';
import { withRouter } from "react-router-dom";



class Header extends Component {

handleOnClick = () => {
this.props.history.push(`/`)
}


render(){
	return(
	<div>
	<img  onClick={this.handleOnClick} src='http://localhost:3001/smallLogo.png' alt='stop yelling at me react!'/>
	</div>

		)
	}

}

export default withRouter(Header)