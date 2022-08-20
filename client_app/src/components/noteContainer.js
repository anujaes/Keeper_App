import React            from "react";
import Note             from "./note";
import { connect }      from "react-redux";
import './css/noteContainer.css';

function NoteContainer({data}) {
    return (
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
    )
}

const mapStateToProps = (state) => {
    return { data: state.noteReducers };
};

const mapDispatchToProps = () => {
    return { }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteContainer);