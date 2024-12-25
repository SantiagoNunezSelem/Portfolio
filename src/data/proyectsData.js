import htmlSymbol from "../img/symbols/html5-symbol.png"
import cssSymbol from "../img/symbols/css-symbol.png"
import javaScriptSymbol from "../img/symbols/javascript-symbol.png"
import typeScriptSymbol from "../img/symbols/typescript.png"
import reactSymbol from "../img/symbols/react-symbol.png"
import bootstrapSymbol from "../img/symbols/bootstrap-symbol.png"
import tailwindSymbol from "../img/symbols/tailwind-symbol.png"
import cSharp from "../img/symbols/cSharp-symbol.png"
import netFramework from "../img/symbols/net-framework-symbol.png"
import microsoftSqlServer from "../img/symbols/microsoft-sql-server-symbol.png"
import azure from "../img/symbols/azure-development.png"
import entityFramework from "../img/symbols/entity-framework-symbol.png"
import webApiDynamics from '../img/symbols/webapidynamics.png'

import timetracker from "../img/proyects/timetracker.png"
import infractionSystem from "../img/proyects/infractionSystem.png"
import sportClub from "../img/proyects/sport-club.jpg"
import barberShop from "../img/proyects/barberShop.png"
import GameOfLife from "../img/proyects/gameOfLife.png"
import filterAppImg from "../img/proyects/filter-users-app.png"
import calculatorImg from "../img/proyects/calculator.png"
import taskListImg from "../img/proyects/taskslist.jpg"
import piBeerImg from "../img/proyects/pibeer.png"
import portfolioImg from "../img/proyects/portfolio.png"

const proyects = [
    {
        title:"TimeTracker",
        technologies:{
            html: { symbol: htmlSymbol,name: "HTML", className: "" },
            css: { symbol: cssSymbol,name: "CSS", className: "" },
            typeScript: { symbol: typeScriptSymbol,name: "TypeScript", className: "typeScript" },
            react: { symbol: reactSymbol, name: "React", className: "reactSymbol" },
            webApiDynamics: { symbol: webApiDynamics, name: "WebAPI Dynamics 365", className: "circle-symbol"}
        },
        proyectImg:timetracker,
        urlVideo:"",
        urlGitHub:""
    },

    {
        title:"Infraction System",
        technologies:{
            cSharp: {symbol: cSharp, name:"C#", className:""},
            netFramework: {symbol: netFramework, name:".NET Framework", className: "circle-symbol"},
            microsoftSqlServer: {symbol: microsoftSqlServer, name:"Microsoft SQL Server", className: "circle-symbol"},
            entityFramework: {symbol: entityFramework, name:"Entity Framework", className: "circle-symbol"},
            azure: {symbol: azure, name:"Microsoft Azure", className: "circle-symbol"}
        },
        proyectImg:infractionSystem,
        urlVideo:"",
        urlGitHub:""
    },
    
    {
        title:"Sport Club",
        technologies:{
            cSharp: {symbol: cSharp, name:"C#", className:""},
            netFramework: {symbol: netFramework, name:".NET Framework", className: "circle-symbol"},
        },
        proyectImg:sportClub,
        urlVideo:"https://youtu.be/Tg1rY32__eo",
        urlGitHub:"https://github.com/SantiagoNunezSelem/ClubDeportivo"
    },

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
        title:"Game of Life",
        technologies:{
            html: { symbol: htmlSymbol,name: "HTML", className: "" },
            css: { symbol: cssSymbol,name: "CSS", className: "" },
            javascript: { symbol: javaScriptSymbol,name: "JavaScript", className: "" },
            react: { symbol: reactSymbol, name: "React", className: "reactSymbol" }
        },
        proyectImg:GameOfLife,
        urlGitHub:"https://github.com/SantiagoNunezSelem/GameOfLife",
        urlProyect:"https://santiagonunezselem.github.io/GameOfLife"
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