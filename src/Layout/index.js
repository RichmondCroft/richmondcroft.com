import { Outlet,Link } from "react-router-dom";

import './style.css'
export default function Layout(){
    return(
        <>
           <div>
                <nav>
                    <ul  className="navigation-menu-components">
                        <li>
                            <Link to= '/'>Home</Link>
                        </li>  
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/project'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
          <Outlet/>
        </>
    )
}