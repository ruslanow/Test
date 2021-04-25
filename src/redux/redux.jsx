import PostsReducer from "./PostsReducer";
import CommentsReducer from "./CommentsReducer";

const {combineReducers} = require("redux");
const {createStore} = require("redux");


let reducers = combineReducers({
    postsPage: PostsReducer,
    commentsPage: CommentsReducer
})

let store = createStore(reducers)

window.store = store

export default store