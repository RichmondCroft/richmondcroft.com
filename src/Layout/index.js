import { Outlet, Link } from "react-router-dom";
import RCLogo from '../Image/RCLogo.png'
import './style.css'

export default function Layout() {
    return (
        <>
            <div>
                <nav>
                    <div className="richmondCroft-logo-icon" >
                        <img src={RCLogo} alt='RC-logo' width='50px' />
                        Richmond Croft</div>
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