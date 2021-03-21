import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Navbar.Brand href='/'>
          <span className='logo-font'>
            Beerology <i className='fas fa-beer'></i>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <NavDropdown title='Info' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/history'>History</NavDropdown.Item>
              <NavDropdown.Item href='/brewing'>Brewing</NavDropdown.Item>
              {/* <NavDropdown.Item href='/ipa'>IPA</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title='Beers' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/ale'>Ale</NavDropdown.Item>
              <NavDropdown.Item href='/lager'>Lager</NavDropdown.Item>
              <NavDropdown.Item href='/ipa'>IPA</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
