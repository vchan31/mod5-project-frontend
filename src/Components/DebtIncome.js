import React from 'react';
import { Button, Image, Modal } from 'semantic-ui-react'


const DebtIncome = props => {
// console.log(props)
return(

<div>

<Modal open={false}>

<Modal.Header>Client Search Details</Modal.Header>
<Modal.Content image>
<Image wrapped size='medium' src='http://localhost:3002/img_avatar3.png' />
 <Modal.Description>
test

 </Modal.Description>
</Modal.Content>
</Modal>
</div>


	)
}


export default DebtIncome