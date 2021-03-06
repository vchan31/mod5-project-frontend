import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Progress } from 'semantic-ui-react'


const ClientCard = props => {
const {
	name,
	email,
	number,
	id,
	status
	} = props
// console.log(props)

function calculatePercent(){
	if(status==='OnBoarding'){return 12.5}
	else if (status==='Showings'){return 25}
else if (status==='Negotiations'){return 37.5}
else if (status==='Accepted Offer'){return 50}
else if (status==='Contract Negotiations'){return 62.5}
else if (status==='Signed Contract'){return 75}
else if (status==='Board Package'){return 87.5}
else if (status==='Closing'){return 100}		
}


	return (
<div>
		<div onClick={()=>{props.handleSelectClient(id)
			props.history.push(`/client/${props.id}`)
		}
		}>
		<img className='resize-image' src='http://localhost:3001/img_avatar3.png' alt='stop yelling at me react!'/>
		<div className='container'>
		<p>{name}</p>
		<p>{email}</p>
		<p>{number}</p>
		<Progress className='ui green progress'  percent={calculatePercent()} progress/>
		</div>
		</div>
		</div>
	)

}

  function mapDispatchToProps(dispatch){

  	return {
  		handleSelectClient: (clientId) => {
  			// this.props.history.push(`/client/${client}`)
  			dispatch({type: 'SELECT_CLIENT', payload: clientId})
  			// console.log('called', client)
  		}
  	}
  }

export default withRouter(connect(null, mapDispatchToProps)(ClientCard))
// <Link to={`/client/${props.id}`}>About</Link>