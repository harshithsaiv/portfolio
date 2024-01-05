import Navbar from './components/Navbar/Navbar.js'
import Home from './Home/Home.js'
import Skills from './Skills/Skills.js'
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <Skills/>
    </div>
  );
}

export default App;
