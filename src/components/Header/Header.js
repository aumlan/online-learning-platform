import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import classes from './Header.module.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
      

        
        
        // <nav>
        //     <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
        //     <NavLink
        //         activeStyle={activeStyle}
        //         to="/friends"
        //     >Friends</NavLink>
        //     <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
        //     <NavLink activeStyle={activeStyle} to="/about/culture">Culture</NavLink>
        // </nav>
        <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="" width='35px'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className= {`${classes.header_nav} me-auto`}>
                    <Nav.Link>
                        <Link to='/home'>Home</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to='/about'>About</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to='/courses'>Courses</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to='/contact'>Contact</Link>
                    </Nav.Link>
              
                </Nav>
                </Navbar.Collapse>
        </Navbar>
        
    );
};

export default Header;