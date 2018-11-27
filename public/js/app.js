class App extends React.Component {
  render () {
    return (
      <div className='section'>
          <div className='nav'>
            <div class ="logo"><img src =""/></div>
              <ul class = "links">
                <li><a href ="">Home</a></li>
                <li><a href ="">About</a></li>
                <li><a href ="">Contact</a></li>
                </ul>
          </div>
          <div className='main'>
            <Clients />
          </div>
        <div className ='footer'></div>
      </div>
    )
  }
}



ReactDOM.render (
  <App />,
  document.querySelector('.container')
)
