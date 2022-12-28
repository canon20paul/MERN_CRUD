import logo from './logo.svg';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PostList from './Post-list'
import AddPost from './AddPost'
import EditPost from './EditPost'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
     <h1 style={{ backgroundColor: "black", color: "white" ,padding:"10px"}}>MERN STACK CRUD APPLICATION</h1>
      <Router>
        
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/editpost/:postid" element={<EditPost />} />
        
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
