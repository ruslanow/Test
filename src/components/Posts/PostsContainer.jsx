import React from 'react';
import {connect} from "react-redux";
import Posts from "./Posts";
import * as axios from "axios";
import {addPostAC, deletePostAC, updatePostAC, updatePostTextBody, updatePostTextTitle} from "../../redux/PostsReducer";


let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        newTextTitle: state.postsPage.newTextTitle,
        newTextBody: state.postsPage.newTextBody,
        editablePost: state.postsPage.editablePost,
        currentUser: state.postsPage.currentUser,
    }
}

class PostsContainer extends React.Component {

    componentDidMount() {
/*        axios.get(`https://social-network.samuraijs.com/api/1.0/users?`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })*/
    }

    render() {
        return (
            <Posts {...this.props}  />
        )
    }

}


export default connect(mapStateToProps, { addPostAC, deletePostAC, updatePostAC,
                                                         updatePostTextTitle, updatePostTextBody, })(PostsContainer);
