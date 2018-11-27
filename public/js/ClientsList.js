class ClientsList extends React.Component {
  render (){
    return (
      <table>
        <tbody>
        {this.props.clients.map((client, index) => {
          return (
            <tr>
              <td onClick={()=> { this.props.getClient(client); this.props.toggleState('clientsListIsVisible', 'clientIsVisible')}}>
                <img src={client.logo} alt={client.name} />
              </td>
              <td className='client' onClick={()=> { this.props.getClient(client); this.props.toggleState('clientsListIsVisible', 'clientIsVisible')}}>
                <h3> {client.name} </h3>
              </td>
              <td>
                  <button className='deleteButton' onClick={() => this.props.deleteClient(client, index)}>Delete</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}
