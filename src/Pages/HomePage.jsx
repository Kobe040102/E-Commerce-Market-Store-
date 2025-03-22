import '../Style/Home.css';
import logo from '../Images/Logo.png'
import cart from '../Images/cart.png'
import profile from '../Images/user.png';
import shirt from '../Images/Best_Shirt.jpg';
import macbook from '../Images/MacBook.jpg';
import purse from '../Images/Purse.jpg';
function HomePage() {
    return (
        <>
            <section id='nav_sec'>
                <nav className='navbar'>
                    <div className='title-container'>
                        <ul className='nav-list'>
                            <div className='title'>
                                <h1>HexaCart</h1>
                                <li><img src={logo} className='logo-img' alt="Logo" /></li>
                            </div>
                            <div className='catergories-container'>
                                <ul className='catergories'>
                                    <li>
                                        <a href="">Clothing</a>
                                    </li>
                                    <li>
                                        <a href="">Electronics</a>
                                    </li>
                                    <li>
                                        <a href="">Accessories</a>
                                    </li>
                                    <li>
                                        <a href="">HomeGoods</a>
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
            <section id='main-sec'>
                <div className='BestSeller-container'>
                    <h1>Best Sellers</h1>
                    <ul className='best-proc'>
                        <li>
                            <img src={macbook} className='product' alt="computer" />
                            <h1>MacBook</h1>
                            <h2>$1,150.00</h2>
                        </li>
                        <li>
                            <img src={shirt} className='product' alt="shirt" />
                            <h1>T-Shirt</h1>
                            <h2>$29.99</h2>
                        </li>
                        <li>
                            <img src={purse} className='product' alt="purse" />
                            <h1>Gucci Bag</h1>
                            <h2>$850.00</h2><h2>USED</h2>
                        </li>
                    </ul>

                </div>
            </section>
            <section id="footer">

            </section>
        </>

    )
}

export default HomePage;