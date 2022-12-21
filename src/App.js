import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Addmovie from './Addmovie'
import Movieslisted from './Movieslisted'
import Moviescontext from './Moviescontext';



function App() {
  return (
    <div className="App">
      <h1>Movies APP</h1>


      <Moviescontext>

        <Navbar />
        <Addmovie />
        <Movieslisted />
        
        </Moviescontext>
      
    </div>
  );
}

export default App;
