import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from './BootstrapCard'
import {Celebrities} from './celebrities'
import { planets } from './planets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BootstrapCard array={Celebrities} />

      <ul className='list-group w-25'>
        {planets.map(planet => (
          <li className='list-group-item'>{planet}</li>
        ))}

      </ul>
  </div>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
