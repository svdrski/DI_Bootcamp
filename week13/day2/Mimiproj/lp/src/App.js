import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faLocationDot, faPhone, faSquareEnvelope, faEarthAmericas, faBuildingColumns} from '@fortawesome/free-solid-svg-icons'




function App() {
  return (
    <div className="App">
        <div className="header">
          <span className="header-title">Company</span>
          <br></br>
          <span className="header-text">We specialise in something ...</span>
        </div>

        <div className='section'>
            <div className='small-div'>
                 <FontAwesomeIcon  className='icn' icon={faBuilding} />
            </div>

            <div className='big-div'> 
                <span class="div-title">About the Company</span>
                <br/>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
            </div>
        </div>

        <div className='section bg-grey'>
            <div className='small-div'>
                 <FontAwesomeIcon  className='icn' icon={faEarthAmericas} />
            </div>

            <div className='big-div'> 
                <span class="div-title">About the Company</span>
                <br/>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
            </div>
        </div>

        <div className='section'>
            <div className='small-div'>
                 <FontAwesomeIcon  className='icn' icon={faBuildingColumns} />
            </div>

            <div className='big-div'> 
                <span class="div-title">About the Company</span>
                <br/>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
            </div>
        </div>

        <div class="contact-container bg-grey">
          <span class="div-title">Contact us</span>
          <div class="contact-form">
            <div id="sect1">
              <span>Contact us and we will get back to you within 24 hours.</span>
              <span> <FontAwesomeIcon icon={faLocationDot} />Company Name</span>
              <span><FontAwesomeIcon icon={faPhone} />+256 778 800 900</span>
              <span><FontAwesomeIcon icon={faSquareEnvelope} />company.gmail.com</span>
              </div><div id="sect2"><span>Contact</span>
              <input type="text" placeholder="email address" class="input-field"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="comment">
                  </textarea><button class="contact-btn">Send</button>
                  </div>
        </div>
        </div>


    </div>
    
  );
}

export default App;
