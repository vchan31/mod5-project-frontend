import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'


const ClientInfo = props => {
// console.log(props)
return(

<div>

<Modal trigger={<Button>Show Details</Button>}>

<Modal.Header>Client Search Details</Modal.Header>
<Modal.Content image>
<Image wrapped size='medium' src='http://localhost:3002/img_avatar3.png' />
 <Modal.Description>
<p>Days on Market: {props.info.days_searching}</p>
<p>Budget: {props.info.budget}</p>
<p>Annual Income: {props.info.annual_income}</p>
<p>Financing: {props.info.financing}</p>
<p>Moving Date: {props.info.moving_date}</p>
<p>Net Assets: {props.info.net_assets}</p>
<p>Property Type: {props.info.apt_type}</p>
<p>Size: {props.info.size}</p>

 </Modal.Description>
</Modal.Content>
</Modal>
</div>


	)
}


export default ClientInfo