//router route routes 
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Details from './components/Details'
import Login from './components/Login'
import NewPost from './components/NewPost'

function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element = {<Home/>} />
        <Route path ='/login' element = {<Login/>} />
        <Route path ='/post/:slug' element = {<Details/>} />
        <Route path ='/post/new' element = {<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
