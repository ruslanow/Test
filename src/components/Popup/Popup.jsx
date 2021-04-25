import React from 'react';
import styles from './Popup.module.sass'
import {deletePostAC} from "../../redux/PostsReducer";
import {NavLink} from "react-router-dom";


let Popup = (props) => {

    let isEdited = false

    let editTitleElement =
        React.createRef();

    let onTitleChange = () => {
        let t = editTitleElement.current.value;
        isEdited = true
        props.updatePostTextTitle(t, props.id)
    }
    let editBodyElement =
        React.createRef();

    let onBodyChange = () => {
        let t = editBodyElement.current.value;
        isEdited = true
        props.updatePostTextBody(t)
    }


    return (props.popupTrigger) ? (

        <div className={styles.popup}>
            <div className={styles.inner}>
                <div className={styles.box}>
                    <div className="display-4">Note:</div>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <textarea ref={editTitleElement} value={props.title}
                                      placeholder="Enter title message..." onChange={onTitleChange}
                                      className={`form-control form-control-lg ${styles.titleArea}`}/>

                        </div>
                        <div className={styles.body}>

                            <textarea ref={editBodyElement} value={props.body}
                                      placeholder="Enter body message..." onChange={onBodyChange}
                                      className={`form-control ${styles.bodyArea}`}/>
                        </div>
                    </div>
                    <div className={styles.notesButtons}>
                        <button className={`btn btn-success ${styles.notesButtonsItem}`}
                                 onClick={() => {
                                     props.postsTrigger ? props.addPostAC() && props.setTrigger(false) : props.updatePostAC(props.id) && props.setTrigger(false)
                                 }}>
                            <NavLink to = '/posts' className={styles.link}>Save</NavLink>
                        </button>

                        <button className={`btn btn-danger ${styles.notesButtonsItem}`}
                                onClick={() => {
                                     props.deletePostAC(props.id) && props.setTrigger(false)
                                }}>
                            <NavLink to = '/posts' className={styles.link}>Delete</NavLink>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    ) : null
}

export default Popup