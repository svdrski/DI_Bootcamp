import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link, Routes, useParams, useLocation } from 'react-router-dom';
import Project from './Project.js'

const Home = () => (
  <div>
    <hr></hr>
    <h1>Home</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="Homepage"
      width="20%" />
  </div>
);

//new code
const About = ({ hobby }) => (
  <div>
    <hr></hr>
    <p>I love {hobby}</p>
    <img
      src="https://cdn.pixabay.com/photo/2014/04/03/10/26/turntable-310450_1280.png"
      alt="About"
      width="20%" />
  </div>
);



const MyProjects = () => (
  <div>
    <h1>Here is a list of projects</h1>
    <img
      src=" https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
      alt="About"
      width="30%" />
  </div>
);




function App() {
  return (
    <BrowserRouter>
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to='/projects'>projects</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/projects' element={<MyProjects/>}/>
      <Route path="/project/:name/:age" element={<Project />} />
      <Route path="/about" element={<About hobby="music" />} />

    </Routes>
  </div>


    </BrowserRouter>
  )
}

export default App;
