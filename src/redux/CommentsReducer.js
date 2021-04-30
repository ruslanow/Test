const ADD_COMMENT = 'ADD-COMMENT'
const SET_COMMENTS = 'SET_COMMENTS'
const DELETE_COMMENT = 'DELETE_COMMENT'
const ON_COMMENT_CHANGE = 'ON_COMMENT_CHANGE'
const ON_POST_CHANGE = 'ON_POST_CHANGE'

let initialState = {
    commentsData: [],
    newTexMessage: '',
    editTexMessage: '',
    commentCounter: 115
}


const addPostReducer = (state=initialState, action) => {


    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                postId: { ...action.userID ? state.commentsData[state.commentsData.length - 1].id + 1 : 1 },
                id: state.commentsData[state.commentsData.length - 1].id + 1,
                name: 'admin',
                email: null,
                body: state.newTexMessage
            };
            if (newComment.body.length === 0 || !newComment.body.trim()) {
                return state;
            }else {
                return{
                    ...state,
                    newTexMessage: '',
                    commentCounter: state.commentCounter + 1,
                    commentsData: [newComment ,...state.commentsData ]}
            }
        case  ON_POST_CHANGE : {
            return {
                ... state ,
                newTexMessage : action.commentMessage }
        }

        case ON_COMMENT_CHANGE:
            debugger
            return{
                ...state,
                commentsData: [...state.commentsData.map( p => {

                    if (action.id === p.id ) {
                        p.body = action.commentMessage
                        return p
                    } else {
                        return p
                    }
                })]
            }
/*            case ON_POST_CHANGE:
            return{
                ...state,
                commentsData: [...state.commentsData.map( p => {
                    if (p.postId === action.postId) {
                        p.body = state.newTextBody;
                        return p } else {
                        return p
                    }
                })]}*/

        case DELETE_COMMENT:

            let searchName = action.postId;
            let index = state.commentsData.map(el => el.postId).indexOf(searchName);
            state.commentsData.splice(index, 1);
            return { ...state, commentsData: [...state.commentsData] };


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
export const onCommentChangeAC = (commentMessage, id) => ({type: ON_COMMENT_CHANGE, commentMessage, id})
export const onPostChangeAC = (commentMessage, postId) => ({type: ON_POST_CHANGE, commentMessage, postId})