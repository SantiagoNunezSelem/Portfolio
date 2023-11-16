import React,{useState,useEffect} from "react"
import "../../stylesheets/ProyectsSection/Proyect.css";
import htmlSymbol from "../../img/symbols/html5-symbol.png";
import cssSymbol from "../../img/symbols/css-symbol.png"
import javaScriptSymbol from "../../img/symbols/javascript-symbol.png";
import reactSymbol from "../../img/symbols/react-symbol.png";

function Proyect( {id,title,hasHtml,hasCss,hasJavaScript,hasReact,proyectImg,urlGitHub,urlProyect}){
    
    const [targetSelected,setTarget]=useState("")

    function selectImg(){
        let html="";
        if(hasHtml)
            html+=`<img src=${htmlSymbol}></img>`;
        if(hasCss)
            html+=`<img src=${cssSymbol}></img>`;
        if(hasJavaScript)
            html+=`<img src=${javaScriptSymbol}></img>`;
        if(hasReact)
            html+=`<img class="reactSymbol" src=${reactSymbol}></img>`;
        
        let container = document.getElementById(id)
        container.innerHTML = html;
    }

    useEffect(() => {
        selectImg();
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
                </div> 
                <a href={urlProyect} target={targetSelected}>
                    <div className="proyect-img-container" >
                        <img className="proyect-img" src={proyectImg} draggable="false"/>
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