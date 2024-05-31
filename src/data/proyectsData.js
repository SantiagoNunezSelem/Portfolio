import htmlSymbol from "../img/symbols/html5-symbol.png"
import cssSymbol from "../img/symbols/css-symbol.png"
import javaScriptSymbol from "../img/symbols/javascript-symbol.png"
import reactSymbol from "../img/symbols/react-symbol.png"
import bootstrapSymbol from "../img/symbols/bootstrap-symbol.png"
import tailwindSymbol from "../img/symbols/tailwind-symbol.png"

import barberShop from "../img/proyects/barberShop.png"
import filterAppImg from "../img/proyects/filter-users-app.png"
import calculatorImg from "../img/proyects/calculator.png"
import taskListImg from "../img/proyects/taskslist.jpg"
import piBeerImg from "../img/proyects/pibeer.png"
import portfolioImg from "../img/proyects/portfolio.png"

const proyects = [
    {
        title:"Barber Shop",
        technologies:{
            html: { symbol: htmlSymbol,name: "HTML", className: "" },
            css: { symbol: cssSymbol,name: "CSS", className: "" },
            javascript: { symbol: javaScriptSymbol,name: "JavaScript", className: "" },
            react: { symbol: reactSymbol, name: "React", className: "reactSymbol" },
            tailwind: { symbol: tailwindSymbol, name: "Tailwind", className: "tailwindSymbol" }
        },
        proyectImg:barberShop,
        urlGitHub:"https://github.com/SantiagoNunezSelem/No-Country-C17/tree/main-sin-db",
        urlProyect:"https://c17-peluqueria.vercel.app/"
    },

    {
        title:"Filter Users App",
        technologies:{
            html: { symbol: htmlSymbol,name: "HTML", className: "" },
            css: { symbol: cssSymbol,name: "CSS", className: "" },
            javascript: { symbol: javaScriptSymbol,name: "JavaScript", className: "" },
            react: { symbol: reactSymbol, name: "React", className: "reactSymbol" },
            bootstrap: { symbol: bootstrapSymbol, name: "Bootstrap", className: "bootstrapSymbol" }
        },
        proyectImg:filterAppImg,
        urlGitHub:"https://github.com/SantiagoNunezSelem/Filter-Users-App",
        urlProyect:"https://santiagonunezselem.github.io/Filter-Users-App/"
    },

    {
        title:"Calculator",
        technologies:{
            html: { symbol: htmlSymbol,name: "HTML", className: "" },
            css: { symbol: cssSymbol,name: "CSS", className: "" },
            javascript: { symbol: javaScriptSymbol,name: "JavaScript", className: "" },
            react: { symbol: reactSymbol, name: "React", className: "reactSymbol" },
            bootstrap: { symbol: bootstrapSymbol, name: "Bootstrap", className: "bootstrapSymbol" }
        },
        proyectImg:calculatorImg,
        urlGitHub:"https://github.com/SantiagoNunezSelem/Web-Calculator",
        urlProyect:"https://santiagonunezselem.github.io/Web-Calculator/"
    },

    {
        title:"Tasks List",
        technologies:{
            html: { symbol: htmlSymbol,name: "HTML", className: "" },
            css: { symbol: cssSymbol,name: "CSS", className: "" },
            javascript: { symbol: javaScriptSymbol,name: "JavaScript", className: "" },
            react: { symbol: reactSymbol, name: "React", className: "reactSymbol" },
        },
        proyectImg:taskListImg,
        urlGitHub:"https://github.com/SantiagoNunezSelem/Tasks-List",
        urlProyect:"https://santiagonunezselem.github.io/Tasks-List/"
    },

    {
        title:"PiBeer",
        technologies:{
            html: { symbol: htmlSymbol,name: "HTML", className: "" },
            css: { symbol: cssSymbol,name: "CSS", className: "" },
        },
        proyectImg:piBeerImg,
        urlGitHub:"https://github.com/SantiagoNunezSelem/piBeer",
        urlProyect:"https://santiagonunezselem.github.io/piBeer"
    },

    {
        title:"Portfolio",
        technologies:{
            html: { symbol: htmlSymbol,name: "HTML", className: "" },
            css: { symbol: cssSymbol,name: "CSS", className: "" },
            javascript: { symbol: javaScriptSymbol,name: "JavaScript", className: "" },
            react: { symbol: reactSymbol, name: "React", className: "reactSymbol" },
        },
        proyectImg:portfolioImg,
        urlGitHub:"https://github.com/SantiagoNunezSelem/Portfolio",
        urlProyect:"#home-section"
    },
]

export default proyects