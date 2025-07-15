import React from "react";
import "../stylesheets/MainText.css";
import Typed from "typed.js";

function MainText(){
    const textAnimated = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(textAnimated.current, {
        strings: ["<i>Santiago Nuñez Selem</i>","<i>Full Stack Developer</i>","<i>Dynamics 365 CRM Developer</i>"],
        typeSpeed: 50,
        backSpeed:30,
        backDelay:1500,
        loop:true,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return(
      <span className="home-text" ref={textAnimated}></span>
    );
}

export default MainText;
