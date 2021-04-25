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
        debugger
        axios.get(`https://raw.githubusercontent.com/ruslanow/Test/master/ds.json`)
            .then(response => {
                this.props.setNotesAC(response.data.posts)
            })
            .catch(error => {
                console.log(error.response)
            })

    }

    render() {

        return (
            <Posts {...this.props}  />
        )
    }

}


export default connect(mapStateToProps, { setNotesAC, addPostAC, deletePostAC, updatePostAC,
                                                         updatePostTextTitle, updatePostTextBody, })(PostsContainer);
