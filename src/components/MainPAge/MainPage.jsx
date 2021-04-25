import React from 'react';
import styles from './MainPage.module.sass'
import {NavLink} from "react-router-dom";


let MainPage = (props) => {

    return (
        <div className={styles.wrapper}>
           <NavLink to='/posts'><button className={`btn ${styles.button}`}>Go to the Note`s Page</button></NavLink>
        </div>
    )
}

export default MainPage