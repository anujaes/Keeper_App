import React, { useState, useEffect}    from 'react';
import { updateNote }                   from '../redux/actions';
import { connect }                      from 'react-redux';
import { Button, Modal, Form }          from 'react-bootstrap'
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navigationBar.css'

function UpdateNote(props) {
    const {
        updateNote,
        handleShow,
        visibility,
        oldData
    } = props

    const [data, setData]   = useState ( {...oldData});
    const [btnState, setBtnState] = useState(true);
    const handleClose = ()=> {
        handleShow(false);
    }

    useEffect( () =>{

        // to enable disable ADD button
        if(data.title.length >= 3 && data.content.length >= 5){
            setBtnState(false)
        }
        else
            setBtnState(true)

    },[data])

    function handleText(event){
        setData( (prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        });
    }

    function handleUpdate() {
        data.createdAt = new Date().toLocaleString();
        updateNote({data,id:oldData.createdAt})
        handleClose(true)
        setData({ title:'', content:'' ,createdAt:'' });
    }

    return (
        <>
            <Modal show={visibility} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your note!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            name            = "title"
                            value           = {data.title}
                            type            = "text"
                            onChange        = {handleText}
                            placeholder     = "Note subject..."
                            required
                        />
                        <Form.Control
                            className       = 'mt-2'
                            name            = "content"
                            as              = "textarea"
                            value           = {data.content}
                            onChange        = {handleText}
                            placeholder     = 'write your notes here'
                            style           = {{ height: "200px", resize: "none" }}
                            required
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Text id="etxtDate" className='me-auto date-time'>{new Date().toDateString()}</Form.Text>
                    <Button variant="warning" onClick={handleUpdate} disabled = {btnState}> Update </Button>
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
        updateNote: (datas) => dispatch(updateNote(datas))

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNote);

