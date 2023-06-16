// IMPORTS START
import { Container, Nav, Navbar } from 'react-bootstrap';
// IMPORTS END

function NavbarComponent(){

const navTitles: string[] = 
["SOFTGRAY"
,"PRODUCTS"
, "SERVICES"
, "ABOUT"
, "JOBS"
, "CONTACT"
, "+81-00-0000-0000"] // NAVLINK TITLES


  return (
    <Navbar fixed="top" bg="white"  expand="lg" >
      <Container fluid>
        <Navbar.Brand href="/task2" className='font-bold pb-2 sd:pl-0 md:pl-40 text-2xl'>{navTitles[0]}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav 
            
      
       
          >
            <Nav.Link className='text-semibold !ml-8 pb-2 text-1xl' href="#action1">{navTitles[1]}</Nav.Link>
            <Nav.Link className='text-semibold !ml-8 pb-2 text-1xl'href="#action2">{navTitles[2]}</Nav.Link>
            <Nav.Link className='text-semibold !ml-8 pb-2 text-1xl'href="#" >{navTitles[3]}</Nav.Link>
            <Nav.Link className='text-semibold !ml-8 pb-2 text-1xl'href="#" >{navTitles[4]}</Nav.Link>
            <Nav.Link className='text-semibold !ml-8 pb-2 text-1xl'href="#" >{navTitles[5]}</Nav.Link>
          </Nav>
          <div className="d-flex md:ml-10 md:mr-10 lg:ml-40 lg:mr-40">
            <div className='font-bold'>{navTitles[6]}</div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;