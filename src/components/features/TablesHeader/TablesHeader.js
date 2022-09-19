import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const TablesHeader = props => {

    return (
        <Container>
            <Navbar className="square border-bottom">
                <Navbar.Brand>
                    <h1>Table {props.id}</h1>
                </Navbar.Brand>
                <Navbar.Text className="pb-0 ps-5">
                    <h4> <span className="fw-bold py-0">Status: </span>{props.status}</h4> 
                </Navbar.Text>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to={"/table/" + props.id}>
                            <Button variant="primary" size="lg">Show more</Button>
                        </Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default TablesHeader;
