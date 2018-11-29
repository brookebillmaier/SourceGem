

class App extends React.Component {
  render () {
    return (
      <div className="main">
        <div className='header'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <nobr><a href ="/" class="brandlogo"> SourceGem <img src ="./images/gemicon.png" width="20px"/></a></nobr>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>

              <NavItem eventKey={2} href="#">
                About
              </NavItem>
              <NavDropdown eventKey={3} title="Why SourceGem?" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Services We Offer</MenuItem>
                <MenuItem eventKey={3.2}>View Portfolio</MenuItem>
                <MenuItem eventKey={3.3}>Testimonials</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Become a Client</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Careers
              </NavItem>
              <NavItem eventKey={2} href="#">
                Contact Us
              </NavItem>
              <NavItem eventKey={2} href="#">

              </NavItem>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
          </div>

          <div>
              <ControlledCarousel />
        </div>

        <div className ='services'>
        <h1>What We Do</h1>

          <Grid>
            <Row>
              <Col xs={6} md={3}>
                  <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                  <h4>Website Design</h4>
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                <h4>Marketing</h4>
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                <h4>Branding</h4>
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                <h4>Social Media</h4>
              </Col>
            </Row><br />
            <Row>
              <Col xs={6} md={3}>
                  <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                  <h4>SEO</h4>
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                <h4>Advertising</h4>
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                <h4>Reporting and Analytics</h4>
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                <h4>Email Marketing</h4>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className='main'>
          <Clients />
        </div>
        <div className ='footer'>
        </div>
      </div>
    )
  }
}




var Carousel = ReactBootstrap.Carousel;
var Button = ReactBootstrap.Button;
var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;
var Jumbotron = ReactBootstrap.Jumbotron;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Thumbnail = ReactBootstrap.Thumbnail;
var Modal = ReactBootstrap.Modal;
var ModalFooter = ReactBootstrap.ModalFooter;
var ModalBody = ReactBootstrap.ModalBody;
var ModalDialog = ReactBootstrap.ModalDialog;






class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    //alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img alt="700x500" src="./images/1.png" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src="./images/2.png" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="700x500" src="./images/3.png" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}






ReactDOM.render (
  <App></App>,
  document.querySelector('.container')
)
