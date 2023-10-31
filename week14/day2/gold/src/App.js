import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import ErrorBoundary from './ErrorBoundary';
import { useEffect, useState } from 'react';

function App() {

  const [errorInfo, seterrorInfo] = useState('')



  function funcerror (value) {
    seterrorInfo(value)
  }



      return (
          <>
          <ErrorBoundary funcerror={funcerror}>
            <p>{errorInfo}</p>
          <button onClick={()=>{funcerror({})}}>ERROR</button>
          </ErrorBoundary>
          </>  
      );
}

export default App;
