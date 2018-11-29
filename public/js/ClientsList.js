class ClientsList extends React.Component {
  render (){
    return (
      <table class="portfolioTable">
      <h2> View Some of our Clients </h2>
        <tbody class ="clientsList">
        {this.props.clients.map((client, index) => {
          return (

              <td class ="client">
              <Button bsStyle="danger" className='deleteButton' onClick={() => this.props.deleteClient(client, index)}>X</Button>

              <div onClick={()=> { this.props.getClient(client); this.props.toggleState('clientsListIsVisible', 'clientIsVisible')}}>
                <img class="logo" src={client.logo} alt={client.name} />
                </div>
              </td>



          )
        })}
        </tbody>
      </table>
    )
  }
}
