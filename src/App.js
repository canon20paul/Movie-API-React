import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Addmovie from './Addmovie'
import Movieslisted from './Movieslisted'

function App() {
  return (
    <div className="App">
      <h1>Movies APP</h1>
      <Navbar/>
      <Addmovie/>
      <Movieslisted/>
    </div>
  );
}

export default App;
