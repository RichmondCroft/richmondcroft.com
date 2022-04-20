import { Outlet, Link } from "react-router-dom";

import './style.css'
export default function Layout() {
    return (
        <>
            <div>
                <nav>
                    <div className="richmondCroft-logo-icon">Richmond Croft</div>   
                    <ul className="navigation-menu-components">
                        <li>
                            <Link to='/' className="navigation-menu-tab-links">Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className="navigation-menu-tab-links">About</Link>
                        </li>
                        <li>
                            <Link to='/project' className="navigation-menu-tab-links">Projects</Link>
                        </li>
                        <li>
                            <Link to='/contact' className="navigation-menu-tab-links">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}