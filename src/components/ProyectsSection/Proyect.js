import React,{useState,useEffect} from "react"
import "../../stylesheets/ProyectsSection/Proyect.css"

import { OverlayTrigger, Tooltip } from "react-bootstrap"

function Proyect( {id,title,technologies,proyectImg,urlGitHub,urlVideo,urlProyect}){
    
    const [targetSelected,setTarget]=useState("")

    const [buttonText2,setButtonText2]=useState("Try It")

    const [url2,setUrl2]=useState("")

    useEffect(() => {
        selectTarget()
        setInfo()
    })

    const selectTarget = () => {
        //Open the proyect on another tab if it´s not the portfolio proyect
        if(title != "Portfolio")
            setTarget("_blank")
        else
            setTarget("_top")
    }

    const setInfo = () => {
        if(urlProyect == null){
            setUrl2(urlVideo)
            setButtonText2("Video")
        } 
        else
            setUrl2(urlProyect)
    }

    const isBigText = title.length > 20 ? "big-text" : ""

    return(
        <div className="background-proyect-container">
            <div className="proyect-container">
                <h3 className={`h3-title ${isBigText}`}><span>{title}</span></h3>

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

                <a href={url2} target={targetSelected}>
                    <div className="proyect-img-container" >
                        <img className="proyect-img" src={proyectImg} alt={title+"-photo"} draggable="false"/>
                        <h4>{buttonText2}</h4>
                    </div>
                </a>
                
                <div className="proyect-buttons-container">
                
                {!urlGitHub ? (
                    <OverlayTrigger overlay={<Tooltip>{"Private. Work-Project Code"}</Tooltip>}>
                        <a 
                            href="#" 
                            onClick={(e) => e.preventDefault()}  
                            className="disabled"
                        >
                            <p>code</p>
                        </a>
                    </OverlayTrigger>
                ) : (
                    <a 
                        href={urlGitHub} 
                        target="_blank" 
                        className="enabled"
                    >
                        <p>code</p>
                    </a>
                )}
                    <a 
                        href={url2} 
                        target={targetSelected}
                        id="try-it"
                        className={!url2 ? 'disabled' : 'enabled'}
                    >
                        <p>{buttonText2.toLowerCase()}</p>
                    </a>
                </div>
                
            </div>
        </div>
        
    );
}

export default Proyect;