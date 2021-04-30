import React from 'react';
import {connect} from "react-redux";
import Posts from "./Posts";
import * as axios from "axios";
import {
    addPostAC,
    deletePostAC,
    setNotesAC,
    updatePostAC,
    updatePostTextBody,
    updatePostTextTitle
} from "../../redux/PostsReducer";
import {withRouter} from "react-router";


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

    urlParams = false

    componentDidMount() {
        let postId = this.props.match.params.userId;
        if (!postId) {
            postId = null;
        } else { this.urlParams = true }

        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                this.props.setNotesAC(response.data)
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    deletePostRequest = (postId) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+postId)
            .then(response => {
                if(response.data != null){
                    console.log('OK')
                }
            })
    }

    render() {

        return (
            <Posts {...this.props} deletePostRequest={this.deletePostRequest} isUrlEdited={this.isUrlEdited} />
        )
    }

}


let WithUrlDataContainerComponent = withRouter(PostsContainer);


export default connect(mapStateToProps, { setNotesAC, addPostAC, deletePostAC, updatePostAC,
                                                         updatePostTextTitle, updatePostTextBody})(WithUrlDataContainerComponent);
