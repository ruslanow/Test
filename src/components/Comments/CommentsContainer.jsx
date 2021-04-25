import React from 'react';
import {connect} from "react-redux";
import './Comments.module.sass';

import Comments from "./Comments";
import {addPostAC, deleteCommentAC, onCommentChangeAC, setCommentsDataAC} from "../../redux/CommentsReducer";
import * as axios from "axios";

let mapStateToProps = (state) => {
    return {
        commentsData: state.commentsPage.commentsData,
        newTexMessage: state.commentsPage.newTexMessage
    };
};

class CommentsCContainer extends React.Component {

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
        axios.get(`https://raw.githubusercontent.com/ruslanow/Test/master/ds.json`)
            .then(response => {
                this.props.setCommentsDataAC(response.data.posts)
            })
            .catch(error => {
                console.log(error.response)
            })
    }


    render() {
        return (
            <Comments {...this.props}/>
        )
    }
}


export default connect(mapStateToProps, {addPostAC, onCommentChangeAC, deleteCommentAC, setCommentsDataAC })(CommentsCContainer);

