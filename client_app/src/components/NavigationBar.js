import React,{ useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";
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
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
                <Container>
                    <Navbar.Brand className="brand-name" href="#home">Keeper-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Button variant="warning" onClick={handleShow} ><PlusCircleFill />&nbsp;&nbsp;Note</Button>
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
