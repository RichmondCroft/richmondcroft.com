import Home from "../Header/Home";
import Contact from "../Header/Contact";
import About from "../Header/About";
import './style.css'
import Projects from "../Header/Projects";
import HomeTabDisplay from "../Body/HomeTabDisplay";
import { BrowserRouter } from "react-router-dom";

export default function NavigationMenu() {

    return <>
        <div className="navigation-menu" >
            <div className="richmondCroft-logo">
                Richmond Croft
            </div>
            <div className="navigation-menu-right-side-contents">
            
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
        <HomeTabDisplay />
    </>
}