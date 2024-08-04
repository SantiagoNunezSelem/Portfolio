import "../stylesheets/Contact.css"
import emailImg from "../img/symbols/email-symbol.png"
import linkedInImg from "../img/symbols/linkedin-symbol.png"
import gitHubImg from "../img/symbols/github-symbol.png"
import youtube from "../img/symbols/youtube-symbol.png"


function Contact(){
    return(
        <div className="contact-container">
            <div className="h3-conctact-container">
                <h3>C:\Users\Santiago\Documents\Contact{'>'}</h3>
            </div>
            
            <div className="icons-contact-container">
                <a href="mailto:selemsantiago@gmail.com" target="_blank"><img src={emailImg}/></a>
                <a href="https://www.linkedin.com/in/santiago-nu%C3%B1ez-selem-845000243/" target="_blank"><img src={linkedInImg}/></a>
                <a href="https://github.com/SantiagoNunezSelem" target="_blank"><img src={gitHubImg}/></a>
                <a href="https://www.youtube.com/channel/UCndbqjiPZonSJ8-jSe85gGg" target="_blank"><img src={youtube}/></a>
            </div>
        </div>
    );
}

export default Contact;