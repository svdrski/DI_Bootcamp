import React from 'react';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter } from 'react-router-dom'
// import { Route, Link, Routes, useParams, useLocation } from 'react-router-dom';
// import Project from './Project.js'

// const Home = () => (
//   <div>
//     <hr></hr>
//     <h1>Home</h1>
//     <img
//       src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
//       alt="Homepage"
//       width="20%" />
//   </div>
// );

// //new code
// const About = ({ hobby }) => (
//   <div>
//     <hr></hr>
//     <p>I love {hobby}</p>
//     <img
//       src="https://cdn.pixabay.com/photo/2014/04/03/10/26/turntable-310450_1280.png"
//       alt="About"
//       width="20%" />
//   </div>
// );



// const MyProjects = () => (
//   <div>
//     <h1>Here is a list of projects</h1>
//     <img
//       src=" https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
//       alt="About"
//       width="30%" />
//   </div>
// );




// function App() {
//   return (
//     <BrowserRouter>
//   <div>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About Me</Link>
//       </li>
//       <li>
//         <Link to='/projects'>projects</Link>
//       </li>
//     </ul>
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path='/projects' element={<MyProjects/>}/>
//       <Route path="/project/:name/:age" element={<Project />} />
//       <Route path="/about" element={<About hobby="music" />} />

//     </Routes>
//   </div>


//     </BrowserRouter>
//   )
// }

// export default App;
