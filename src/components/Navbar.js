import {Link} from 'react-scroll';

const Navbar = () => {


    return(
        <header className="mobileNav">
        <div className="navbar">
            <div className="container flex">
            <li><Link to="showcase" spy={true} smooth={true} className="logo md">Shipper.</Link></li>
                <nav>
                    <ul>
                    <li><Link to="subscription" spy={true} smooth={true} className="link">Pricing</Link></li>
                    <li><Link to="table" spy={true} smooth={true} className="link">Demo</Link></li>
                    <li><Link to="footer" spy={true} smooth={true} className="link">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Navbar;