import React, { useState,useEffect} from 'react';
import { addNote }                  from '../redux/actions';
import { connect }                  from 'react-redux';
import { Button, Modal, Form }      from 'react-bootstrap'
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navigationBar.css'

function CreatNote(props) {
    const { addNote } = props

    const [content, setContent] = useState( { title:'', content:'',createdAt:'' });
    const [btnState, setBtnState] = useState(true); // toto

    const handleClose = ()=> {
        props.handleShow(false);
    }

    useEffect( () =>{
        // to enable disable ADD button 
        if(content.title.length >= 3 && content.content.length >= 5){
            setBtnState(false)
        }
        else
            setBtnState(true)

    },[content])

    function handleText(event){
        const {name,value} = event.target;
        setContent( (prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    function handleAddNote(){
        content.createdAt = new Date().toLocaleString();
        addNote(content)
        handleClose(true)
        setContent({ title:'', content:'' ,createdAt:'' });
    }

    return (
        <>
            <Modal show={props.visibility} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new note!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            name            = "title"
                            value           = {content.name}
                            type            = "text"
                            onChange        = {handleText}
                            placeholder     = "Note subject..."
                            required
                        />
                        <Form.Control
                            className       = 'mt-2'
                            name            = "content"
                            as              = "textarea"
                            value           = {content.name}
                            onChange        = {handleText}
                            placeholder     = 'write your notes here'
                            style           = {{ height: "200px", resize: "none" }}
                            required
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Text id="txtDate" className='me-auto date-time'>{new Date().toDateString()}</Form.Text>
                    <Button variant="warning" onClick={handleAddNote} disabled = {btnState}> ADD </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

function mapStateToProps(state) {
	return { };
}

function mapDispatchToProps(dispatch) {
	return {
        addNote: (data) => dispatch(addNote(data)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatNote);

