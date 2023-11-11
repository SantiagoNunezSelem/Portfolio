import './App.css';
import MainText from "./components/MainText.js";
import Proyect from "./components/ProyectContainer.js";
import calculatorImg from "./img/proyects/calculator.png";
import tasksListImg from "./img/proyects/taskslist.jpg";
import piBeerImg from "./img/proyects/pibeer.png";
import portfolioImg from "./img/proyects/portfolio.png";
import AboutMe from "./components/AboutMe.js";
import video from "./video/video.mp4";
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home-section">Home</a></li>
            <li><a href="#proyects-section">Proyects</a></li>
            <li><a href="#aboutMe-section">About Me</a></li>
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
        <h2 className="title-section">Proyects</h2>
        <div className='proyects-container'>
          <Proyect
          title="Calculator"
          hasHtml={true}
          hasCss={true}
          hasJavaScript={true}
          hasReact={true}
          proyectImg={calculatorImg}
          urlGitHub="https://github.com/SantiagoNunezSelem/Web-Calculator"
          urlProyect="https://santiagonunezselem.github.io/Web-Calculator/"
          id={1}
          />

          <Proyect
          title="Tasks List"
          hasHtml={true}
          hasCss={true}
          hasJavaScript={true}
          hasReact={true}
          proyectImg={tasksListImg}
          urlProyect="https://santiagonunezselem.github.io/Tasks-List"
          urlGitHub="https://github.com/SantiagoNunezSelem/Tasks-List"
          id={2}
          />
          
          <Proyect
          title="PiBeer"
          hasHtml={true}
          hasCss={true}
          proyectImg={piBeerImg}
          urlProyect="https://santiagonunezselem.github.io/piBeer"
          urlGitHub="https://github.com/SantiagoNunezSelem/piBeer"
          id={3}
          />
          
          <Proyect
          title="Portfolio"
          hasHtml={true}
          hasCss={true}
          hasJavaScript={true}
          hasReact={true}
          proyectImg={portfolioImg}
          urlProyect="#home-section"
          id={4}
          />
        </div>
        
        <div id='color-gradient2'></div>
      </section>

      <section id="aboutMe-section" className='section-separation'>
        <AboutMe/>
      </section>

    </div>
  );
}

export default App;
