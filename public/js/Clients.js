class Clients extends React.Component {
  constructor (props){
  super(props)
  this.state = {
    clientsListIsVisible: false,
    addClientIsVisible: false,
    clientIsVisible: false,
    editClientIsVisible: false,
    clients : [],
    client: {}
    }
    this.deleteClient = this.deleteClient.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.getClient = this.getClient.bind(this)
    this.toggleState = this.toggleState.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }

  componentDidMount () {
    this.getClients();
  }

  deleteClient (client, index) {
    fetch('clients/' + client.id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          clients: [
            ...this.state.clients.slice(0, index),
            ...this.state.clients.slice(index + 1)
          ]
        })
      })
  }

  handleCreate (client) {
    const updatedClients = this.state.clients
    updatedClients.unshift(client)
    this.setState({clients: updatedClients})
  }

  handleCreateSubmit (client) {
    fetch('/clients', {
      body: JSON.stringify(client),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdClient => {
        return createdClient.json()
      })
      .then(jsonedClient => {
        this.handleCreate(jsonedClient)
        this.toggleState('addClientIsVisible', 'clientsListIsVisible')
      })
      .catch(error => console.log(error))
    }

    handleUpdateSubmit (client) {
    fetch('/clients/'+ client.id, {
      body: JSON.stringify(client),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedClient => {
        return updatedClient.json()
      })
      .then(jsonedClient => {
        //this.getClients()
        this.toggleState('editClientIsVisible', 'clientIsVisible')
      })
      .catch(error => console.log(error))

}

  getClient( client ) {
    this.setState({client: client})
  }

  getClients () {
    fetch('/clients')
      .then(response => response.json())
      .then(data => {
        this.setState({
          clients: data
        })
      }).catch(error => console.log(error))
  }



  toggleState (st1, st2) {
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }


  render () {
    return (
      <div className='Portfolio'>
        <h2> Clients </h2>

        <button onClick={()=>this.toggleState('addClientIsVisible', )}>Become a Client</button>

         <button
         onClick={()=>this.toggleState('clientsListIsVisible')}
         >
         View Our Portfolio
         </button>
        {
          this.state.clientsListIsVisible ?
            <ClientsList
             toggleState={this.toggleState}
             clients={this.state.clients}
             getClient={this.getClient}
             deleteClient={this.deleteClient}
            /> : ''
        }
        {
          this.state.addClientIsVisible ?
           <ClientForm
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
           /> : ''
         }
        {
          this.state.clientIsVisible ?
           <Client
            toggleState={this.toggleState}
            client={this.state.client}
            handleSubmit={this.handleUpdateSubmit}
           /> : ''
      }
      </div>
    )
  }
}