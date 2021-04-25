import React from 'react';
import styles from './Posts.module.sass'

import Popup from "../Popup/Popup";
import {useState} from 'react';


import pic1 from '../../assets/trash-bin.svg'
import pic2 from '../../assets/edit.svg'
import {NavLink} from "react-router-dom";
import ViewingPopup from "../viewingPopup/viewingPopup";


let Posts = (props) => {

    const [buttonPopup, setButtonPopup] = useState(false)  // редактирование поста попап
    const [buttonViewerPopup, setButtonViewerPopup] = useState(false) // просмотр поста попап
    const [postsTrigger, setPostsTrigger] = useState(false) //

    let handleClose = function(e) {
        e.stopPropagation();
        alert('close');
    }


    return <div className={styles.wrapper}>
        <div className={styles.container}>

            <div className={styles.buttons}>
                <button className='btn' onClick={() => {
                    setButtonPopup(true)
                    setPostsTrigger(true)
                    props.updatePostTextTitle('')
                    props.updatePostTextBody('')
                }}> Add Note
                </button>

            </div>


            { props.posts ?
                props.posts.map(p => {

                    return <div className={styles.box} onClick={() => {
                        setButtonViewerPopup(true)
                        setPostsTrigger(false)
                        props.updatePostTextTitle(p.title, p.id)
                        props.updatePostTextBody(p.body)

                    }}>
                        <NavLink to={`/posts/${p.id}`} className={styles.link}>
                            <div className={styles.content}>
                                <div className={styles.title}>
                                    <h2> {p.title} </h2>
                                </div>
                                <div className={styles.body}>
                                    <h4> {p.body} </h4>

                                </div>
                            </div>

                            <div className={styles.notesButtons}>
                                <button className={`btn ${styles.notesButtonsItem}`} onClick={() => {
                                    setButtonPopup(true)
                                    setPostsTrigger(false)
                                    props.updatePostTextTitle(p.title, p.id)
                                    props.updatePostTextBody(p.body)
                                }}>
                                    <img src={pic2} width='20em' alt=""/>
                                </button>
                                <button className={`btn ${styles.notesButtonsItem}`} onClick={() => {
                                    props.deletePostAC(p.id)

                                }}>
                                    <img src={pic1} width='20em' alt=""/>
                                </button>
                            </div>
                        </NavLink>
                        </div>

                }) : null
            }

            <ViewingPopup popupTrigger={buttonViewerPopup}
                   setTrigger={setButtonViewerPopup}
                   postsTrigger={postsTrigger}
                   setPostsTrigger={setPostsTrigger}
                   updatePostAC={props.updatePostAC}
                   addPostAC={props.addPostAC}
                   deletePostAC={props.deletePostAC}
                   updatePostTextTitle={props.updatePostTextTitle}
                   updatePostTextBody={props.updatePostTextBody}
                   title={props.newTextTitle}
                   id={props.currentUser}
                   body={props.newTextBody}/>
            <Popup popupTrigger={buttonPopup}
                   setTrigger={setButtonPopup}
                   postsTrigger={postsTrigger}
                   setPostsTrigger={setPostsTrigger}
                   updatePostAC={props.updatePostAC}
                   addPostAC={props.addPostAC}
                   deletePostAC={props.deletePostAC}
                   updatePostTextTitle={props.updatePostTextTitle}
                   updatePostTextBody={props.updatePostTextBody}
                   title={props.newTextTitle}
                   id={props.currentUser}
                   body={props.newTextBody}/>
        </div>
    </div>

}



export default Posts