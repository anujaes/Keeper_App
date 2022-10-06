import React,{ useState } from "react";
import { PlusCircleFill,JournalText } from "react-bootstrap-icons";
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navigationBar.css'
import CreatNote from "./createNote";

import {
    Navbar,
    Container,
    Nav,
    Button,
} from 'react-bootstrap'

function NavigationBar() {

    const [show, setShow]       = useState(false);
    const handleShow            = () => setShow(true);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container>
                    <Navbar.Brand className="brand-name"><JournalText className="brand-logo"/> Keeper-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="menuItem">
                        <Nav className="ms-auto">
                            <Button variant="warning" className="navbar-btn" onClick={handleShow} ><PlusCircleFill />&nbsp;&nbsp;Note</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <CreatNote
                visibility = {show}
                handleShow = {setShow}
            />

        </>
    )
}

export default NavigationBar;
