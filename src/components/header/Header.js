import { React } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import '../header/Header.scss'

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" fixed="top">
            <LinkContainer to="/">
                <Navbar.Brand>
                    CR
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" color="primary" variation="primary" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <LinkContainer to="/about">
                    <Nav.Link>About me</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/services">
                    <Nav.Link>Services</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/projects">
                    <Nav.Link>My projects</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                    <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header