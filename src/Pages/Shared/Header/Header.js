import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="navbar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand to="/home"><h1><span>Medi-Care</span></h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" variant="dark">
                        <Nav className="ms-auto">
                        <Nav.Link><NavLink className="link" to="/home">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="link" to="/shop">Shop</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="link" to="/about">About Us</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="link" to="/contact">Contact</NavLink></Nav.Link>
                        {
                            user.email && <Navbar.Text className="text-primary">
                            Welcome <NavLink to="/login" className="link">{user.displayName}</NavLink>
                        </Navbar.Text>
                        }
                        {
                            user.email &&  <Link onClick={logOut} to="/" ><Button className="btn-custom ms-2" variant="primary">Logout</Button></Link>
                        }
                        {
                            !user.email &&  <Link onClick={logOut} to="/login" ><Button className="btn-custom ms-2" variant="primary">Login</Button></Link>
                        }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;