class Client extends React.Component {
  render () {
    return (
          <div className="mainClient">


              <img src={this.props.client.logo} alt={this.props.client.name} />
              <h3><span>Name: </span> {this.props.client.name} </h3>
              <p><span>Industry: </span> {this.props.client.industry} </p>
              <p><span>Slogan: </span> {this.props.client.slogan} </p>
              <p><span>Type: </span>{this.props.client.type} </p>
            <button onClick={()=> this.props.toggleState('clientIsVisible', 'clientsListIsVisible')}>See Full List</button>


            <button onClick={()=> this.props.toggleState('editClientIsVisible')}>Edit</button>


        </div>
      )
  }
}
