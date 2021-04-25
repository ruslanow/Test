
const SET_NOTES = 'SET_NOTES'
const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const UPDATE_POST = 'UPDATE_POST'
const UPDATE_POST_TITLE = 'UPDATE_POST_TITLE'
const UPDATE_POST_BODY = 'UPDATE_POST_BODY'



let initialState = {
    posts: [
        {id: 1, title: "1", body: "1st Body Message Message Message"},
        {id: 2, title: "2", body: "2nd Body Message Message Message"},
        {id: 3, title: "3", body: "3rd Body Message Message Message"},
],
    newTextTitle: 'There is will be message',
    newTextBody: '1',
    currentUser: '1',
    id: 3
}


const PostsReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.id + 1,
                title: state.newTextTitle,
                body: state.newTextBody
            }
            return {
                ...state,
                newTextTitle: '',
                newTextBody: '',
                id: newPost.id,
                posts: [...state.posts, newPost]
            }
        /*            if ( newPost.title.length === 0 || !newPost.title.trim() ||
                        newPost.newTextBody.length === 0 || !newPost.newTextBody.trim() ) { return state; }
                    else {
                        return {
                            ...state,
                            newTextTitle: '',
                            newTextBody: '',
                            posts: [...state.posts, newPost]
                        }
                    }*/

        case UPDATE_POST:
            let item = state.posts.find(x => x.id === state.currentUser);
            item.title = state.newTextTitle;
            item.body = state.newTextBody;

            return state;

        case SET_NOTES:
            return {...state, posts: action.notes}

        case UPDATE_POST_TITLE:
            return {
                ...state, newTextTitle: action.newTextTitle, currentUser: action.currentUser
            }
        case UPDATE_POST_BODY:
            return {
                ...state, newTextBody: action.newTextBody
            }
        case DELETE_POST:
            let searchName = action.id;
            let index = state.posts.map(el => el.id).indexOf(searchName);
            state.posts.splice(index, 1);
            return {...state, posts: [...state.posts]}

        default:
            return state;
    }
}

export default PostsReducer;

export const setNotesAC = (notes) => ({type: SET_NOTES, notes})
export const addPostAC = () => ({type: ADD_POST})
export const deletePostAC = (id) => ({type: DELETE_POST, id})
export const updatePostAC = (id) => ({type: UPDATE_POST, id})
export const updatePostTextTitle = (t, id) => ({type: UPDATE_POST_TITLE, newTextTitle: t, currentUser: id})
export const updatePostTextBody = (t) => ({type: UPDATE_POST_BODY, newTextBody: t})
