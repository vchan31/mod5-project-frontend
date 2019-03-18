import clientData from '../clientData'

const defaultState = {
	clients: [], 
	selectedClient: null,
}

function reducer(state=defaultState, action){
	// console.log('I am in the reducer, console logging action: ', action.payload)
	// console.log('state :', state)
	
	switch(action.type){
		case 'FETCH_CLIENTS':
		return {...state, clients: action.payload}
		
		case 'SELECT_CLIENT': 
		  return {...state, selectedClient: action.payload}
		 
		default:
		  return state 
	}
}

export default reducer