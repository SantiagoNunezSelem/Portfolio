import React,{useState,useEffect} from "react"
import "../../stylesheets/ProyectsSection/Proyect.css"

import { OverlayTrigger, Tooltip } from "react-bootstrap"

function Proyect( {id,title,technologies,proyectImg,urlGitHub,urlProyect}){
    
    const [targetSelected,setTarget]=useState("")

    useEffect(() => {
        selectTarget();
    })

    const selectTarget = () => {
        //Open the proyect on another tab if it´s not the portfolio proyect
        if(title != "Portfolio")
            setTarget("_blank")
        else
            setTarget("_top")
    }

    return(
        <div className="background-proyect-container">
            <div className="proyect-container">
                <h3 className="h3-title">{title}</h3>

                <div className="symbols-container" id={id}>
                    {
                    Object.keys(technologies).map((key) => {
                        const tech = technologies[key];
                        return(
                            //Use ToolTips to identify each technologie 
                            <OverlayTrigger overlay={<Tooltip>{tech.name}</Tooltip>}>
                                <img src={tech.symbol} class={tech.className}></img>
                            </OverlayTrigger>
                        )
                    })
                    }
                </div>

                <a href={urlProyect} target={targetSelected}>
                    <div className="proyect-img-container" >
                        <img className="proyect-img" src={proyectImg} alt={title+"-photo"} draggable="false"/>
                        <h4>Try It</h4>
                    </div>
                </a>
                
                <div className="proyect-buttons-container">
                    <a href={urlGitHub} target={"_blank"}>
                        <p>code</p>
                    </a>
                    
                    <a href={urlProyect} target={targetSelected} id="try-it">
                        <p>try it</p>
                    </a>
                </div>
                
            </div>
        </div>
        
    );
}

export default Proyect;