import PostsReducer from "./PostsReducer";

const {combineReducers} = require("redux");
const {createStore} = require("redux");


let reducers = combineReducers({
    postsPage: PostsReducer
})

let store = createStore(reducers)

window.store = store

export default store