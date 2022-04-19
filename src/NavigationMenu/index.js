import Home from "../Header/Home";
import Contact from "../Header/Contact";
import About from "../Header/About";
import './style.css'
import Projects from "../Header/Projects";

export default function NavigationMenu(){
    return<>
        <div className="navigation-menu" > Richmond Croft
            <span className="navigation-menu-right-side-contents">
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
            </span>
        </div>
    </>
}