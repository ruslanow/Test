
const SET_NOTES = 'SET_NOTES'
const SET_INITIAL_ID = 'SET_INITIAL_ID'
const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const UPDATE_POST = 'UPDATE_POST'
const UPDATE_POST_TITLE = 'UPDATE_POST_TITLE'
const UPDATE_POST_BODY = 'UPDATE_POST_BODY'



let initialState = {
    posts: [
        {userId: 2, id: 1, title: "1", body: "1st Body Message Message Message"},
        {userId: 3, id: 2, title: "2", body: "2nd Body Message Message Message"},
        {userId: 4, id: 3, title: "3", body: "3th Body Message Message Message"},
        {userId: 5, id: 4, title: "4", body: "5th Body Message Message Message"},
],
    newTextTitle: '',
    newTextBody: '',
    currentUser: '',
}


const PostsReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: {...state.posts.length ? state.posts[state.posts.length - 1].id + 1 : 1},
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




        case UPDATE_POST:


            return {...state, posts: [ ...state.posts.map(p => {
                if (p.id === action.id) {
                    p.body = state.newTextBody;
                    p.title = state.newTextTitle
                    return p } else{
                    return p
                }
                })]}


/*
            return {...state, posts: [...state.posts] }
*/



        case SET_NOTES:
            return {...state, posts: action.notes}

        case UPDATE_POST_TITLE:
            return {
                ...state,  newTextTitle: action.newTextTitle, currentUser: action.currentUser
            }
        case UPDATE_POST_BODY:
            return {
                ...state, newTextBody: action.newTextBody
            }

        case DELETE_POST:

            return {...state, posts: [...state.posts.filter(p => {
                    return p.id !== action.id
                })]}

        default:
            return state;
    }
}

export default PostsReducer;

export const setNotesAC = (notes) => ({type: SET_NOTES, notes})
export const addPostAC = () => ({type: ADD_POST})
export const setInitialIdAC = () => ({type: SET_INITIAL_ID})
export const deletePostAC = (id) => ({type: DELETE_POST, id})
export const updatePostAC = (id) => ({type: UPDATE_POST, id})
export const updatePostTextTitle = (t, id) => ({type: UPDATE_POST_TITLE, newTextTitle: t, currentUser: id})
export const updatePostTextBody = (t) => ({type: UPDATE_POST_BODY, newTextBody: t})
