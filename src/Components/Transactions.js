import React from 'react';

const Transactions = props => {
console.log(props)


function changeToCurrencyString (number) {
	return ('$' + number.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

return (

	<div>

	{props.transactions[0] ? <h3>{props.transactions[0]['address']}, Sales Price: 

	{changeToCurrencyString(parseInt(props.transactions[0]['price']))}</h3> : null}

	{props.transactions[0] && props.transactions[0]['contract'] ? <h3>in contract</h3> : null }
<br/>
	</div>
		)


}

export default Transactions
