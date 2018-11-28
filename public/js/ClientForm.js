class ClientForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      industry: '',
      slogan: '',
      type: '',
      logo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChange (event) {
    this.setState({[event.target.id]: event.target.value})

  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }
  render () {
    return (
      <div className='field'>
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
              type='number'
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
              type='tel'
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
          <button onClick={()=> {
            console.log("clicked")
            this.props.toggleState('editClientIsVisible')}}>Cancel</button>
      </div>
    )
  }
}
