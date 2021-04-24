import './App.css';
import PostsContainer from "./components/Posts/PostsContainer";
import {Route, BrowserRouter} from 'react-router-dom';

function App(props) {
  return (
      <BrowserRouter>

        <div id = "main__intro">

            <PostsContainer />
        </div>
      </BrowserRouter>
  )
}

export default App;
