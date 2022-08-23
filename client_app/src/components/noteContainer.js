import React                    from "react";
import Note                     from "./note";
import { connect }              from "react-redux";
import { Row,Col }              from "react-bootstrap";
import { PlusCircleFill }       from "react-bootstrap-icons";
import './css/noteContainer.css';

function NoteContainer({data}) {
    return data.length ? (
        <div className="row note-container">
            {
                data.map ( (item,index) => (
                    <Note
                        key         = {index}
                        index       = {index + 1}
                        color       = {item.color}
                        title       = {item.title}
                        content     = {item.content}
                        createdAt   = {item.createdAt}
                    /> )
                )
            }
        </div>
    ) : (
        <Row className="dummy-container">
        <Col className="dummy">
            <div>
                <h1>No notes to display !</h1>
                <h3>click on '<PlusCircleFill /> Note' to create a new note</h3>
            </div>
        </Col>
    </Row> )
}


const mapStateToProps = (state) => {
    return { data: state.noteReducers };
};

const mapDispatchToProps = () => {
    return { }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteContainer);