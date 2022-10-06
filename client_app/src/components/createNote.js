import React, { useState, useEffect}    from 'react';
import { addNote }                      from '../redux/actions';
import { connect }                      from 'react-redux';
import { Button, Modal, Form }          from 'react-bootstrap'
import * as Icon                    from 'react-bootstrap-icons';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/createNote.css'

function CreatNote(props) {
    const { addNote,
        handleShow,
        visibility,
    }                               = props
    const [content, setContent]     = useState( { title :'', content : '', createdAt : '' });
    const [btnState, setBtnState]   = useState(true);
    const handleClose               = ()=> { handleShow(false); }

    useEffect( () =>{
        // to enable disable ADD button
        if(content.title.length >= 3 && content.content.length >= 5){
            setBtnState(false)
        }
        else
            setBtnState(true)
    },[content])

    useEffect( () =>{
        // to enable disable ADD button
        if(content.title.length >= 3 && content.content.length >= 5){
            setBtnState(false)
        }
        else
            setBtnState(true)

    },[content])

    function handleText(event){
        setContent( (prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
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
            <Modal show={visibility} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Note!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            name            = "title"
                            value           = {content.title}
                            type            = "text"
                            onChange        = {handleText}
                            placeholder     = "Note subject..."
                            required
                        />
                        <Form.Control
                            className       = 'mt-2'
                            name            = "content"
                            as              = "textarea"
                            value           = {content.value}
                            onChange        = {handleText}
                            placeholder     = 'write your notes here'
                            style           = {{ height: "200px", resize: "none" }}
                            required
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Text id="txtDate" className='me-auto date-time'>{new Date().toDateString()}</Form.Text>
                    <Button variant="warning" onClick={handleAddNote} disabled = {btnState}> <Icon.Plus width={30} height={30}/> </Button>
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

