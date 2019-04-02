import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Progress } from 'semantic-ui-react'


const TeamClientCard = props => {
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
			<div className='Client-card' onClick={()=>{props.handleSelectClient(id)
				props.history.push(`/client/${props.id}`)
			}
			}>
			{/*<img className='resize-image-team' src='http://localhost:3002/img_avatar3.png' alt='stop yelling at me react!'/>*/}
				<div className='container'>
				<h3>{name}</h3>
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

export default withRouter(connect(null, mapDispatchToProps)(TeamClientCard))
// <Link to={`/client/${props.id}`}>About</Link>