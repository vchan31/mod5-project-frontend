
const defaultState = {
	clients: [], 
	selectedClient: null,
}

function reducer(state=defaultState, action){
	// console.log('I am in the reducer, console logging state: ', state)
	
	switch(action.type){
		case 'FETCH_CLIENTS':
		// console.log('I hit the switch case to fetch!')
		return {...state, clients: action.payload}
		
		case 'SELECT_CLIENT': 
		// console.log('I hit the swtich case to set the selected client!')
		  return {...state, selectedClient: action.payload}
		 
		default:
		  return state 
	}
}

export default reducer