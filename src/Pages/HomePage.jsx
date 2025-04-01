import '../Style/Home.css';
import shirt from '../Images/Best_Shirt.jpg';
import macbook from '../Images/MacBook.jpg';
import purse from '../Images/Purse.jpg';
import insta from '../Images/Icons/instagram.png';
import facebook from '../Images/Icons/facebook.png';
import twitter from '../Images/Icons/twitter.png';
import IPhone from '../Images/Electronics/Iphone.jpg';
import Ipad from '../Images/Electronics/Ipad.jpg';
import PS5 from '../Images/Electronics/Console.jpg';
import Navbar from '../Components/Navbar';
import Scroller from '../Components/Scroller';

function HomePage() {
    return (
        <>
            <Navbar />
            <section id='main-sec'>
                <div className='BestSeller-container'>
                    <h1 className='best-title'>Best Sellers</h1>
                    <ul className='best-proc'>
                        <li>
                            <img src={macbook} className='product' alt="computer" />
                            <h1 className='products'>MacBook</h1>
                            <h2 className='prices'>$1,150.00</h2>
                            <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                        <li>
                            <img src={shirt} className='product' alt="shirt" />
                            <h1 className='products'>T-Shirt</h1>
                            <h2 className='prices'>$29.99</h2>
                            <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                        <li>
                            <img src={purse} className='product' alt="purse" />
                            <h1 className='products'>Gucci Bag</h1>
                            <h2 className='prices'>$850.00</h2>
                            <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='Clothing-container'>
                    <h1 className='best-title'>Check Our Popular Clothing</h1>
                    <div className='scoll-container'>
                        <Scroller />
                        <a href="/ClothingPage" className='clicking'><h1 className='click-info'>Click for more</h1></a>
                    </div>
                </div>
                <div className='new-release-container'>
                    <h1 className='best-title'>
                        New Electronics In Stock
                    </h1>
                </div>
                <div className='newTech'>
                    <ul className='device-container'>
                        <li>
                            <img src= {IPhone} alt="Ipad" />
                            <h1 className='products'>IPhone</h1>
                            <h2 className='prices'>$750.00</h2>
                            <div className='btn-container'>
                            <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                        <li>
                            <img src={Ipad} alt="Iphone" />
                            <h1 className='products'>IPad</h1>
                            <h2 className='prices'>$1,050.45</h2>
                            <div className='btn-container'>
                            <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                        <li>
                            <img src={PS5} alt="PS5" />
                            <h1 className='products'>PS5</h1>
                            <h2 className='prices'>$1,760.95</h2>
                            <div className='btn-container'>
                            <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                    </ul>
                </div>
                    
            </section>
            <section id="footer">
                <div className='footer-container'>
                    <ul className='footer-links'>
                        <li>
                            <h3 className='social-title'>Contact us</h3>
                            <div className='icon1'>
                                <p>(888)-xxx-2345</p>
                            </div>
                            <div className='icon1'>
                                <p>support@hexacart.com</p>
                            </div>
                            <div className='icon1'>
                                <p>Mon - Fri, 9AM - 5 AM PST</p>
                            </div>
                        </li>
                        <li>
                            <h3 className='social-title'>Account Services</h3>
                            <div className='icon1'>
                                <p>Sign In/Register</p>
                            </div>
                            <div className='icon1'>
                                <p>Order History</p>
                            </div>
                            <div className='icon1'>
                                <p>Saved Items / Wishlist</p>
                            </div>
                        </li>
                        <li>
                            <h3 className='social-title'>Shopping Guide</h3>
                            <div className='icon1'>
                                <p>Payment & Checkout</p>
                            </div>
                            <div className='icon1'>
                                <p>Returns & Refunds</p>
                            </div>
                            <div className='icon1'>
                                <p>FAQs</p>
                            </div>
                        </li>
                        <li>
                            <h3 className='social-title'>Social Media</h3>
                            <div className='icon1'>
                                <p>Instagram</p><img src={insta} className='social-icon' alt="insta" />
                            </div>
                            <div className='icon1'>
                                <p>Facebook</p> <img src={facebook} className='social-icon' alt="facebook" />
                            </div>
                            <div className='icon1'>
                                <p>X</p> <img src={twitter} className='social-icon' alt="twitter" />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default HomePage;