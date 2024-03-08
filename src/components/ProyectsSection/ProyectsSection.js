
import '../../stylesheets/ProyectsSection/ProyectsSection.css';
import Proyect from "./Proyect.js";
import calculatorImg from "../../img/proyects/calculator.png";
import tasksListImg from "../../img/proyects/taskslist.jpg";
import piBeerImg from "../../img/proyects/pibeer.png";
import portfolioImg from "../../img/proyects/portfolio.png";

function Proyects(){
    return(
        <>
            <h2 id="title-proyects-section" className="title-section">Proyects</h2>
            <div className='proyects-container'>
                <Proyect
                title="Calculator"
                hasHtml={true}
                hasCss={true}
                hasJavaScript={true}
                hasReact={true}
                hasBootstrap={true}
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
                urlGitHub="https://github.com/SantiagoNunezSelem/Portfolio"
                id={4}
                />
            </div>
        </>
    );
}

export default Proyects;