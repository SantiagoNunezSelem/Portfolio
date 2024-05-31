
import '../../stylesheets/ProyectsSection/ProyectsSection.css';
import Proyect from "./Proyect.js";
import proyects from "../../data/proyectsData.js"

function Proyects(){
    return(
        <>
            <h2 id="title-proyects-section" className="title-section">Proyects</h2>
            <div className='proyects-container'>
                {proyects.map((p,index) => (
                    <Proyect
                    id={index}
                    key={index}
                    title={p.title}
                    technologies={p.technologies}
                    proyectImg={p.proyectImg}
                    urlGitHub={p.urlGitHub}
                    urlProyect={p.urlProyect}
                    />
                    )
                )}   
            </div>
        </>
    );
}

export default Proyects;