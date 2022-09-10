import React from 'react'
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><h3>Te Am O</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/home" className='link'>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/inventory" className='link'>Inventory</Link></Nav.Link>
                            <Nav.Link><Link to="/transaction" className='link'>Transaction</Link></Nav.Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/about" className='link'>About</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/help" className='link'>Help</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={()=>props.isLog(false)} >Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header