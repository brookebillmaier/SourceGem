class Client extends React.Component {
  render () {
    return (
          <div className="mainClient">


              <img class="logo" src={this.props.client.logo} alt={this.props.client.name} />
              <h3><span>Name: </span> {this.props.client.name} </h3>
              <p><span>Industry: </span> {this.props.client.industry} </p>
              <p><span>Slogan: </span> {this.props.client.slogan} </p>
              <p><span>Type: </span>{this.props.client.type} </p>
            <Button bsStyle="primary" onClick={()=> this.props.toggleState('clientIsVisible', 'clientsListIsVisible')}>See Full List</Button>


            <Button bsStyle="warning" onClick={()=> this.props.toggleState('editClientIsVisible')}>Edit</Button>

        </div>
      )
  }
}
