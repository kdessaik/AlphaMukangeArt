import logo from './logo.svg';
import './App.css';
import './assets/Css/main.css';
import logo1 from './assets/img/Logo2.png'
import aboutHistory from './assets/img/about-history.jpg'
import aboutVisual from './assets/img/about-visual.png'
import introductionVisual from './assets/img/introduction-visual.png'
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Work from './Pages/Work';








function App() {








  
  return (
    <div>
      
      
     
<div className="device-notification">
  <a className="device-notification--logo" href="#0">
    <img src={logo1} alt="Global"/>
    <p>Global</p>
  </a>
  <p className="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.</p>
</div>

<div className="perspective effect-rotate-left">
  <div className="container"><div className="outer-nav--return"></div>
    <div id="viewport" className="l-viewport">
      <div className="l-wrapper">
        <header className="header">
          <a className="header--logo" href="#0">
            <img src={logo1} alt="Global"/>
            <p>Global</p>
          </a>
          <button className="header--cta cta">Hire Us</button>
          <div className="header--nav-toggle">
            <span></span>
          </div>
        </header>
        <Navbar/>
        
        
        <ul className="l-main-content main-content">
        
          <Work/>
         
          <li className="l-section section">
            <div className="about">
              <div className="about--banner">
                <h2>We<br/>believe in<br/>passionate<br/>people</h2>
                <a href="#0">Career
                  <span>

                  </span>
                </a>
                <img src={aboutVisual} alt="About Us"/>
              </div>
              <div className="about--options">
                <a href="#0">
                  <h3>Winners</h3>
                </a>
                <a href="#0">
                  <h3>Philosophy</h3>
                </a>
                <a href="#0">
                  <h3>History</h3>
                </a>
              </div>
            </div>
          </li>
          <li className="l-section section">
            <div className="contact">
              <div className="contact--lockup">
                <div className="modal">
                  <div className="modal--information">
                    <p>Pawia 5, 31-154 Kraków, Poland</p>
                    <a href="mailto:ouremail@gmail.com">ouremail@gmail.com</a>
                    <a href="tel:+148126287560">+48 12 628 75 60</a>
                  </div>
                  <ul className="modal--options">
                    <li><a href="#0">Bēhance</a></li>
                    <li><a href="#0">dribbble</a></li>
                    <li><a href="mailto:ouremail@gmail.com">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="l-section section">
            <div className="hire">
              <h2>You want us to do</h2>
              
              <form className="work-request">
                <div className="work-request--options">
                  <span className="options-a">
                    <input id="opt-1" type="checkbox" value="app design"/>
                    <label for="opt-1">
                  
                      App Design
                    </label>
                    <input id="opt-2" type="checkbox" value="graphic design"/>
                    <label for="opt-2">
                      
                      Graphic Design
                    </label>
                    <input id="opt-3" type="checkbox" value="motion design"/>
                    <label for="opt-3">
                      
                      Motion Design
                    </label>
                  </span>
                  <span class="options-b">
                    <input id="opt-4" type="checkbox" value="ux design"/>
                    <label for="opt-4">
                      
                      UX Design
                    </label>
                    <input id="opt-5" type="checkbox" value="webdesign"/>
                    <label for="opt-5">
                      
                      Webdesign
                    </label>
                    <input id="opt-6" type="checkbox" value="marketing"/>
                    <label for="opt-6">
                      
                      Marketing
                    </label>
                  </span>
                </div>
                <div className="work-request--information">
                  <div className="information-name">
                    <input id="name" type="text" spellcheck="false"/>
                    <label for="name">Name</label>
                  </div>
                  <div className="information-email">
                    <input id="email" type="email" spellcheck="false"/>
                    <label for="email">Email</label>
                  </div>
                </div>
                <input type="submit" value="Send Request"/>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</div>
    </div>
  );
}

export default App;
