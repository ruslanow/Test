import './App.css';
import PostsContainer from "./components/Posts/PostsContainer";
import {Route, BrowserRouter} from 'react-router-dom';
import MainPage from "./components/MainPAge/MainPage";

function App(props) {
  return (
      <BrowserRouter>

        <div id = "main__intro">
            <Route path='/posts' component = {PostsContainer}/>
            <Route exact path='/' component = {MainPage}/>

        </div>
      </BrowserRouter>
  )
}

export default App;
