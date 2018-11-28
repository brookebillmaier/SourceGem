class ClientForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      industry: '',
      slogan: '',
      type: '',
      logo: '',
      show: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this);
  }


  componentDidMount(){
    if(this.props.client){
      this.setState({
        name: this.props.client.name,
        industry: this.props.client.industry,
        slogan: this.props.client.slogan,
        type: this.props.client.type,
        logo: this.props.client.logo,
        id: this.props.client.id
      })
    }
  }

  handleClose() {
     this.setState({ show: false });
   }


  handleChange (event) {
    this.setState({[event.target.id]: event.target.value})

  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }
  render () {
    return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Become a Client</Modal.Title>
        </Modal.Header>
      <Modal.Body>
      <div className='field'>
      <center>

        <form onSubmit={this.handleSubmit}>
          <label className='label' for='name'>Name</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <label className='label' for='industry'>Industry</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              onChange={this.handleChange}
              value={this.state.industry}
              id='industry'
            />
          </div>
          <label className='label' for='slogan'>Slogan</label>
          <div className='control'>
            <input className='input'
              type='text'
              id='slogan'
              onChange={this.handleChange}
              value={this.state.slogan}
            />
          </div>
          <label className='label' for='type'>Type</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='type'
              onChange={this.handleChange}
              value={this.state.type}
            />
          </div>
          <label className='label' for='logo'>Logo</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='logo'
              onChange={this.handleChange}
              value={this.state.logo}
            />
          </div>
          <div className='control'>
            <input className='submit' type='submit' />
          </div>
        </form>
          </center>
      </div>
      </Modal.Body>
          <Modal.Footer>
          <Button onClick={()=> {
            console.log("clicked")
            this.props.toggleState(handleClose())}}>Cancel</Button>

            <Button onClick={this.handleClose()}>Close</Button>

        </Modal.Footer>
      </Modal.Dialog>
    </div>
    )
  }
}
