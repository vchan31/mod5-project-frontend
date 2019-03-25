import React, { Component } from 'react';
import { Button, Image, Modal, Header, Confirm } from 'semantic-ui-react'


class NegotiationDetails extends Component {
state = {open: true}

close = () => this.setState({
	open: false,
	interestRate: .004,
	term: 30
})

render (){

console.log(this.props)
return(

<div>

<Modal open={this.state.open}>

<Modal.Header>Apartment information</Modal.Header>
<Modal.Content image>
<Image wrapped size='medium' src='http://localhost:3002/img_avatar3.png' />
 <Modal.Description>
 <Header>Congratulations on finding an Aparment!</Header>
<p> Lets help you crunch some numbers!</p>
Purchase Price: <input type='number'></input>
monthly cost (taxes too): <input type='number'></input>
additional purchaser income: <input type='number'></input>
other debt: <input type='number'></input>

 </Modal.Description>
</Modal.Content>
<br/>
 <Button onClick={this.close}>K THX!</Button>
 {/*<Button> Submit</Button> */}
</Modal>
</div>


	)
}
	}


export default NegotiationDetails