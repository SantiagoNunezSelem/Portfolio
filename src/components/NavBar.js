import "../stylesheets/NavBar.css";

function NavBar(){
    return(
        <nav>
          <ul>
            <li><a href="#home-section">Home</a></li>
            <li><a href="#proyects-section">Proyects</a></li>
            <li><a href="#aboutMe-section">About Me</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </nav>
    );
}

export default NavBar;