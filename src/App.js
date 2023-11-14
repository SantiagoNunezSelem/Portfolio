import './App.css';
import NavBar from "./components/NavBar.js";
import MainText from "./components/MainText.js";
import Proyects from "./components/ProyectsSection/ProyectsSection.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import video from "./video/video.mp4";
import Contact from "./components/Conctact.js";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <NavBar/>
      </header>

      <section id="home-section">
        <div className="capa"></div>
        <video src={video} muted autoPlay loop></video>
        <div className="mainText-container"><MainText/></div>
        <div id="color-gradient1"></div>
      </section>

      <section id="proyects-section" className="section-separation">
        {/* ----------------  rompe el proyecto en 600px de width ---------------- */}
        {/* <Proyects/> */}
        <div id='color-gradient2'></div>
      </section>

      <section id="aboutMe-section" className='section-separation'>
        <AboutMe/>
      </section>

      <section id="contact-section">
        <Contact/>
      </section>
      
    </div>
  );
}

export default App;
