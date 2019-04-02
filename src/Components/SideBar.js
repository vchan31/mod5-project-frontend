import React from 'react';


const SideBar = props => {
// console.log('sidebar', props)
	return (
		<div className="ui vertical menu">
		<div className="item">
			<div className="header">Clients
			</div>
			<div className="menu">
				<a href="/headquarters" className="item">Urgent Matters</a>
				<a href='/headquarters' className="item">Pending Deals</a>
				<a href='/headquarters' className="item">Current Offers</a>
			</div>
		</div>
			<div className="item"><div className="header">Budgeting Solutions
			</div>
				<div className="menu"><a href='/headquarters' className="item">Marketing</a>
				<a href={`/metrics/${props.clientId}`} className="item">Metrics</a>
				</div>
			</div>
			
			
		</div>
	)

}

export default SideBar