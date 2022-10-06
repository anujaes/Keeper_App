import React,{useState}             from "react";
import { connect }                  from "react-redux";
import { Card }                     from "react-bootstrap";
import * as Icon                    from 'react-bootstrap-icons';
import UpdateNote                   from "./updateNote";
import { removeNote }               from "../redux/actions";
import './css/note.css'

function Note(props) {

    const {
        color,
        title,
        content,
        index,
        createdAt,
        removeNote,
    }                = props;
        const [oldData,setOldData]  = useState({})
        const [show, setShow]       = useState(false);
        const handleShow            = () => setShow(true);

    function handleEdit(){
        setOldData({ title : title, content : content, createdAt : createdAt })
        handleShow()
    }

    function handleDelete() {
        removeNote(createdAt)
    }

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" style={{ marginTop: "20px" }}>
            <Card>
                <Card.Header style={{backgroundColor : color}}>
                    {'Note ' + index}
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {content} </Card.Text>
                    <p>{createdAt}</p>
                    <span onClick={ () => handleEdit()} className="small-btn btn-edit"><Icon.Pencil /></span>
                    <span onClick={ () => handleDelete()} className="small-btn btn-delete"><Icon.Trash3 /></span>
                </Card.Body>
            </Card>

            {
                show ?
                <UpdateNote
                    visibility  = {show}
                    handleShow  = {setShow}
                    oldData     = {oldData}
                />
                :""
            }

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeNote : (data) => dispatch(removeNote(data))
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Note);