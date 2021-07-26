import {Link} from 'react-scroll';
import {Link as Link2} from  'react-router-dom';

const Navbar = () => {


    return(
        <header className="mobileNav">
        <div className="navbar">
            <div className="container flex">
            <li><Link2 to="/"  className="logo md">Shipper.</Link2></li>
                <nav>
                    <ul>
                    <li><Link to="subscription" spy={true} smooth={true} className="link">Pricing</Link></li>
                    <li><Link to="table" spy={true} smooth={true} className="link">Demo</Link></li>
                    <li><Link2 to="/loginpage" className="link">Login</Link2></li>
                    <li><Link2 to="/register" className="link">Register</Link2></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Navbar;