
import logo from '../Images/Logo.png'
import cart from '../Images/cart.png'
import profile from '../Images/user.png';
import { Link } from "react-router-dom";
import '../Style/Nav.css';
function Nav() {
    return(
        <>
            <section id='nav_sec'>
                <nav className='navbar'>
                    <div className='title-container'>
                        <ul className='nav-list'>
                            <div className='title'>
                                <Link to='/HomePage' className='Home-link'>
                                <h1>HexaCart</h1>
                                <li><img src={logo} className='logo-img' alt="Logo" /></li>
                                </Link>
                            </div>
                            <div className='catergories-container'>
                                <ul className='catergories'>
                                    <li>
                                        <Link to="/ClothingPage">Clothing</Link>
                                    </li>
                                    <li>
                                        <Link to="/ElectronicsPage">Electronics</Link>
                                    </li>
                                    <li>
                                        <Link to="/AccessoriesPage">Accessories</Link>
                                    </li>
                                    <li>
                                        <Link to="/HomeGoodsPage">HomeGoods</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='right-items'>
                                <li><input type="text" className='bar' placeholder='Search...' /></li>
                                <li className='right-item'>
                                    <img src={cart} className='icon' alt="icon" />
                                    <a href=""><h3>Cart</h3></a>
                                </li>
                                <li className='right-item'>
                                    <img src={profile} className='icon' alt="icon" />
                                    <a href=""><h3>Profile</h3></a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </section>
        </>
    )
}
export default Nav;