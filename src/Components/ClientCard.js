import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


const ClientCard = props => {
const {
	name,
	email,
	number,
	id
	} = props
// console.log(props)
	return (
<div>
		<div className='Client-card' onClick={()=>{props.handleSelectClient(id)
			props.history.push(`/client/${props.id}`)
		}
		}>
		<img className='resize-image' src='http://localhost:3002/img_avatar3.png' alt='stop yelling at me react!'/>
		<div className='container'>
		<p>{name}</p>
		<p>{email}</p>
		<p>{number}</p>
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