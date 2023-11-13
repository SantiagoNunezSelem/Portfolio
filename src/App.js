import './App.css';
import MainText from "./components/MainText.js";
import Proyects from "./components/ProyectsSection/ProyectsSection.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import video from "./video/video.mp4";
import Contact from "./components/Conctact.js";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home-section">Home</a></li>
            <li><a href="#proyects-section">Proyects</a></li>
            <li><a href="#aboutMe-section">About Me</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home-section">
        <div className="capa"></div>
        <video src={video} muted autoPlay loop></video>
        <div className="mainText-container"><MainText/></div>
        <div id="color-gradient1"></div>
      </section>

      <section id="proyects-section" className="section-separation">
        {/* ----------------  rompe el proyecto en 600px de width ---------------- */}
        <Proyects/>
        <div id='color-gradient2'></div>
      </section>

      <section id="aboutMe-section" className='section-separation'>
        {/* ----------------  rompe el proyecto en 600px de width ---------------- */}
        <AboutMe/>
      </section>

      <section id="contact-section">
        <Contact/>
      </section>
      
    </div>
  );
}

export default App;
