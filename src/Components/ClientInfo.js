import React from 'react';

const ClientInfo = props => {
// console.log(props)
return(

<div>

<h1>Client Search Details</h1>


<p>Days on Market: {props.info.days_searching}</p>
<p>Budget: {props.info.budget}</p>
<p>Annual Income: {props.info.annual_income}</p>
<p>Financing: {props.info.financing}</p>
<p>Moving Date: {props.info.moving_date}</p>
<p>Net Assets: {props.info.net_assets}</p>
<p>Property Type: {props.info.apt_type}</p>
<p>Size: {props.info.size}</p>



</div>


	)
}


export default ClientInfo