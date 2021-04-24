import React from 'react';
import styles from './Posts.module.sass'

import Popup from "../Popup/Popup";
import {useState} from 'react';


import pic1 from '../../assets/trash-bin.svg'
import pic2 from '../../assets/edit.svg'
import {deletePostAC} from "../../redux/PostsReducer";


let Posts = (props) => {

    const [buttonPopup, setButtonPopup] = useState(false)
    const [postsTrigger, setPostsTrigger] = useState(false)


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
                            setButtonPopup(true)
                            setPostsTrigger(false)
                            props.updatePostTextTitle(p.title, p.id)
                            props.updatePostTextBody(p.body)
                        }}>

                            <div className={styles.content}>
                                <div className={styles.title}>
                                    <h2> {p.title} </h2>
                                </div>
                                <div className={styles.body}>
                                    <h4> {p.body} </h4>

                                </div>
                            </div>

                            <div className={styles.notesButtons}>
                                <button className={`btn ${styles.notesButtonsItem}`}>
                                    <img src={pic2} width='20em' alt=""/>
                                </button>
                                <button className={`btn ${styles.notesButtonsItem}`}>
                                    <img src={pic1} width='20em' alt=""/>
                                </button>
                            </div>
                        </div>

                }) : null
            }

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