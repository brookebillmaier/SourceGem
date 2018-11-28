
class App extends React.Component {
  render () {
    return (
      <div className='section'>
          <div className='main'>
            <Clients />
          </div>
          <div className ='footer'>
          </div>
      </div>
    )
  }
}



ReactDOM.render (
  <App />,
  document.querySelector('.container')
)
