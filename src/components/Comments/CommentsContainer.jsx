import React from 'react';
import {connect} from "react-redux";
import './Comments.module.sass';

import Comments from "./Comments";
import {
    addPostAC,
    deleteCommentAC,
    onCommentChangeAC,
    onPostChangeAC,
    setCommentsDataAC
} from "../../redux/CommentsReducer";
import * as axios from "axios";
import {setInitialIdAC} from "../../redux/PostsReducer";
import {withRouter} from "react-router";

let mapStateToProps = (state) => {
    return {
        commentsData: state.commentsPage.commentsData,
        newTexMessage: state.commentsPage.newTexMessage
    };
};

class CommentsContainer extends React.Component {

/*    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }*/
    componentDidMount() {

        debugger
        let postId = this.props.match.params.postId;
        if (!postId) {
            postId = 2;
        }
        console.log(postId)


        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(response => {
                debugger
                this.props.setCommentsDataAC(response.data)
            })
            .catch(error => {
                console.log(error.response)
            })

        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }
    render() {
        return (
            <Comments {...this.props}/>
        )
    }
}

let WithUrlDataContainerComponent = withRouter(CommentsContainer);

export default connect(mapStateToProps, {addPostAC, onCommentChangeAC, onPostChangeAC, deleteCommentAC, setCommentsDataAC, setInitialIdAC })(WithUrlDataContainerComponent);

