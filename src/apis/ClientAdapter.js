// const CLIENT_URL = "http://localhost:3000/api/v1/clients/"
const USER_URL = "http://localhost:3000/api/v1/users/"

export default class ClientAdapter {

  static getUsers(id) {
  	// console.log('fetching Users...')
    return fetch(USER_URL + id)
      .then(res => res.json())
      
  }

  static getClients(id){
  	// console.log('fetching Clients... ')
 	return fetch(USER_URL + id)
      .then(res => res.json())

  }

 
}