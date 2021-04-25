import React, {useState} from 'react';
import styles from "./Comments.module.sass";
import pic1 from '../../assets/edit.svg'
import pic2 from '../../assets/trash-bin.svg'

const CommentsItem = (props) => {
    const [isEditing, setIsEditing] = useState(false)


    let newPostElement =
        React.createRef();

    let onPostChange = () => {
        let t = newPostElement.current.value;
        props.onCommentChangeAC(t)
    }

    let addPost = () => {
        props.addPostAC()
    }


    return (
        <div>
            <div className={styles.block}>
                <div className={styles.profileInfo}>
                    <img src='' width="40px" height="40px" alt=""/>
                    <div className={styles.name}>
                        <h2>{props.name}</h2>
                    </div>
                </div>

                { isEditing ?

                    <textarea ref={newPostElement} value={props.text}
                              placeholder="Enter message..." onChange={onPostChange}
                              className={`form-control form-control-lg ${styles.titleArea}`}/>
                    :
                    <div className={styles.message}>
                        <h3>{props.text}</h3>
                    </div>
                }

                <div className={styles.buttons}>
                    <img src={pic1} width='22em' alt="" className={styles.editPost} onClick={() => {
                        setIsEditing(true)
                    }}/>
                    <img src={pic2} width='22em' alt="" className={styles.deletePost} onClick={() => {
                        props.deleteCommentAC(props.postId)
                    }}/>
                </div>
            </div>

        </div>
    );
};

const Comments = (props) => {

    let postElement = props.commentsData
        .map(p => <CommentsItem name={p.name} deleteCommentAC={props.deleteCommentAC} postId={p.postId} key={p.id}
                                text={p.text} onCommentChangeAC={props.onCommentChangeAC}/>);

    let newPostElement =
        React.createRef();

    let onPostChange = () => {
        let t = newPostElement.current.value;
        props.onCommentChangeAC(t)
    }

    let addPost = () => {
        props.addPostAC()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.addPost}>
                <textarea ref={newPostElement} value={props.newTexMessage}
                          placeholder="Введите текст сообщения..." onChange={onPostChange}/>
                <button onClick={addPost}>Click Me</button>
            </div>
            {postElement}
        </div>
    )
}


export default Comments;