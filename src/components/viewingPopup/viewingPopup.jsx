import React from 'react';
import styles from './viewingPopup.module.sass'
import CommentsContainer from "../Comments/CommentsContainer";
import {NavLink} from "react-router-dom";


let ViewingPopup = (props) => {


    return (props.popupTrigger) ? (
        <div className={styles.popup}>
            <div className={styles.inner}>
                <div className={styles.box}>
                    <NavLink to='/posts'>
                    <button className={`btn ${styles.button}`} onClick={() => {props.setTrigger(false)}}>close</button>
                    </NavLink>

                    <div className={styles.content}>
                        <div className={styles.title}>
                            {props.title}
                        </div>
                        <div className={`display-4 ${styles.body}`}>
                            {props.body}
                        </div>
                    </div>

                    <div className={styles.wrapper}>
                        <CommentsContainer/>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}

export default ViewingPopup