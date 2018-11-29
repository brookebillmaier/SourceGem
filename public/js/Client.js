class Client extends React.Component {
  render () {
    return (
          <div className="mainClient">

          <center>
              <img class="showlogo" src={this.props.client.logo} alt={this.props.client.name} />
              <h3> {this.props.client.name} </h3>
              <h5><span>Industry: </span> {this.props.client.industry} </h5>
              <h5><span>Slogan: </span> {this.props.client.slogan} </h5>
              <h5><span>Type: </span>{this.props.client.type} </h5>
            <Button bsStyle="primary" onClick={()=> this.props.toggleState('clientIsVisible', 'clientsListIsVisible')}>See Full List</Button>


            <Button bsStyle="warning" onClick={()=> this.props.toggleState('editClientIsVisible')}>Edit</Button>
            </center>

        </div>
      )
  }
}
