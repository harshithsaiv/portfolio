import Navbar from './components/Navbar/Navbar.js'
import Home from './Home/Home.js'
import Skills from './Skills/Skills.js'
// import Blogs from './Blogs/Blogs.js'
import Projects from './Projects/Projects.js'
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      {/* <Blogs/> */}
    </div>
  );
}

export default App;
