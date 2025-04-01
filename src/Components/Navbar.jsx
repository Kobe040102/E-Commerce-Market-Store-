
import logo from '../Images/Logo.png'
import cart from '../Images/cart.png'
import profile from '../Images/user.png';
import '../Style/Nav.css';
function Nav() {
    return(
        <>
            <section id='nav_sec'>
                <nav className='navbar'>
                    <div className='title-container'>
                        <ul className='nav-list'>
                            <div className='title'>
                                <a href='/HomePage' className='Home-link'>
                                <h1>HexaCart</h1>
                                <li><img src={logo} className='logo-img' alt="Logo" /></li>
                                </a>
                            </div>
                            <div className='catergories-container'>
                                <ul className='catergories'>
                                    <li>
                                        <a href="/ClothingPage">Clothing</a>
                                    </li>
                                    <li>
                                        <a href="/AccessoriesPage">Electronics</a>
                                    </li>
                                    <li>
                                        <a href="/ElectronicsPage">Accessories</a>
                                    </li>
                                    <li>
                                        <a href="/HomeGoodsPage">HomeGoods</a>
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