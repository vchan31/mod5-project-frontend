const CLIENT_URL = "http://localhost:3000/api/v1/clients"

export default class ClientAdapter {

  static getClients() {
  	console.log('fetching Clients')
    return fetch(`${CLIENT_URL}`)
      .then(res => res.json())
      
  }

 
}