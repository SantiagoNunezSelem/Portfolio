import "../stylesheets/Contact.css";
import whatsAppImg from "../img/symbols/whatsapp-symbol.png";
import emailImg from "../img/symbols/email-symbol.png";
import linkedInImg from "../img/symbols/linkedin-symbol.png";
import gitHubImg from "../img/symbols/github-symbol.png";


function Contact(){
    return(
        <div className="contact-container">
            <h3>C:\Users\Santiago\Documents\Contact{'>'}</h3>
            <div className="icons-contact-container">
                <a href="https://wa.me/+541123577722" target="_blank"><img src={whatsAppImg}/></a>
                <a href="mailto:selemsantiago@gmail.com" target="_blank"><img src={emailImg}/></a>
                <a href="https://www.linkedin.com/in/santiago-nu%C3%B1ez-selem-845000243/" target="_blank"><img src={linkedInImg}/></a>
                <a href="https://github.com/SantiagoNunezSelem" target="_blank"><img src={gitHubImg}/></a>
            </div>
        </div>
    );
}

export default Contact;