import clientData from '../clientData'

const defaultState = {
	clients: clientData, 
	selectedClient: null,
	otherThing: 'beef'
}

function reducer(state=defaultState, action){
	console.log('I am in the reducer, console logging action: ', action.payload)
	
	switch(action.type){
		case 'SELECT_CLIENT': 
		  return {...state, selectedClient: action.payload}
		default:
		  return state 
	}
}

export default reducer