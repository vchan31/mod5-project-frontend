// import clientData from '../clientData'

const defaultState = {
	clients: [], 
	selectedClient: null,
	selectedUser: null
}

function reducer(state=defaultState, action){
	console.log('I am in the reducer, console logging state: ', state)
	
	switch(action.type){
		case 'FETCH_CLIENTS':
		console.log('I hit the switch case to fetch! the payload is....:', action.payload)
		return {...state, clients: action.payload}
		
		case 'SELECT_CLIENT': 
		// console.log('I hit the swtich case to set the selected client!')
		  return {...state, selectedClient: action.payload}
		 
		  case 'SELECT_USER':
		  console.log('I hit the select user case! also the payload is:', action.payload)
		  return {...state, selectedUser: action.payload}

		default:
		  return state 
	}
}

export default reducer