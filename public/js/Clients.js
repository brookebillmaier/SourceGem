class Clients extends React.Component {
  constructor (props){
  super(props)
  this.state = {
    clientsListIsVisible: false,
    addClientIsVisible: false,
    clientIsVisible: false,
    editClientIsVisible: false,
    aboutIsVisible: false,
    clients : [],
    client: {}
    }
    this.deleteClient = this.deleteClient.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.getClient = this.getClient.bind(this)
    this.toggleState = this.toggleState.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
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

  handleSubmitButton () {
    this.setState({ showButton: true})
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
        this.getClients()
        this.toggleState('editClientIsVisible', 'clientIsVisible', 'clientsListIsVisible')
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
        <div className="jumbotron">
        <Jumbotron>
        <h1>View Our Portfolio!</h1>
        <p>
          We love what we do and we hope you do too. View our work and happy clients below.
        </p>
        <div className="buttons">
        <ButtonToolbar>
          <Button bsStyle="primary" className="jumboButton" onClick={()=>this.toggleState('addClientIsVisible', )}>Become a Client</Button>


          <Button bsStyle="primary" className="jumboButton"
           onClick={()=>this.toggleState('clientsListIsVisible')}
           >
           View Full Portfolio
           </Button>

           <Button bsStyle="primary" className="jumboButton"
            onClick={()=>this.toggleState('aboutIsVisible')}
            >
            About Us
            </Button>
          </ButtonToolbar>
           </div>
           </Jumbotron>
           </div>

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
      {
        this.state.editClientIsVisible  ?
         <ClientForm
          toggleState={this.toggleState}
          client={this.state.client}
          handleSubmit={this.handleUpdateSubmit}
         /> : ''
    }
    {
      this.state.aboutIsVisible  ?
       <About
        toggleState={this.toggleState}
       /> : ''
  }

      </div>
    )
  }
}
