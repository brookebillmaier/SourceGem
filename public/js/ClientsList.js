class ClientsList extends React.Component {
  render (){
    return (
      <table>
      <h2> Clients </h2>
        <tbody>
        {this.props.clients.map((client, index) => {
          return (
            <tr>
              <td onClick={()=> { this.props.getClient(client); this.props.toggleState('clientsListIsVisible', 'clientIsVisible')}}>
                <img class="logo" src={client.logo} alt={client.name} />
              </td>
              <td className='client' onClick={()=> { this.props.getClient(client); this.props.toggleState('clientsListIsVisible', 'clientIsVisible')}}>
                <h3> {client.name} </h3>
              </td>
              <td>
                  <Button bsStyle="danger" className='deleteButton' onClick={() => this.props.deleteClient(client, index)}>Delete</Button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}
