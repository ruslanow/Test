const ADD_COMMENT = 'ADD-COMMENT'
const SET_COMMENTS = 'SET_COMMENTS'
const DELETE_COMMENT = 'DELETE_COMMENT'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
    commentsData: [
        {id: 1, postId: 100, text: 'H1'},
        {id: 2, postId: 101, text: 'H2'},
        {id: 3, postId: 102, text: 'H3'},
    ],
    newTexMessage: '',
    commentCounter: 103
}


const addPostReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                id: 1,
                postId: state.commentCounter + 1,
                text: state.newTexMessage
            };
            if (newComment.text.length === 0 || !newComment.text.trim()) {
                return state;
            }else {
                return{
                    ...state,
                    newTexMessage: '',
                    commentCounter: state.commentCounter + 1,
                    commentsData: [...state.commentsData,newComment ]}
            }


        case UPDATE_POST_TEXT: {
            return{
                ...state,
                newTexMessage: action.commentMessage}
        }

        case DELETE_COMMENT:
            let searchName = action.postId;
            let index = state.commentsData.map(el => el.postId).indexOf(searchName);
            state.commentsData.splice(index, 1);
            return { ...state, commentsData: [...state.commentsData] }

        case SET_COMMENTS:
            return {...state, commentsData: action.commentsData}

        default:
            return state;
    }
}



export default addPostReducer;



export const addPostAC = (userID) => ({type: ADD_COMMENT, userID})
export const setCommentsDataAC = (commentsData) => ({type: SET_COMMENTS, commentsData})
export const deleteCommentAC = (postId) => ({type: DELETE_COMMENT, postId})
export const onCommentChangeAC = (commentMessage, postId) => ({type: UPDATE_POST_TEXT, commentMessage, postId})