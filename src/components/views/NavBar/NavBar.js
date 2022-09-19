// import PropTypes from 'prop-types';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
    <Navbar className="my-4 px-3 rounded" bg="primary" variant="dark">
        <Navbar.Brand href="/">Waiter.app</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Nav className="float-right">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

// NavBar.propTypes = {};

export default NavBar;