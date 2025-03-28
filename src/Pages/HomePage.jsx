import '../Style/Home.css';
import shirt from '../Images/Best_Shirt.jpg';
import macbook from '../Images/MacBook.jpg';
import purse from '../Images/Purse.jpg';
import insta from '../Images/Icons/instagram.png';
import facebook from '../Images/Icons/facebook.png';
import twitter from '../Images/Icons/twitter.png';
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
                    <h1 className='clothing-title'>Check Our Clothing</h1>
                    <div className='scoll-container'>
                        <Scroller />
                        <a href="/ClothingPage" className='clicking'><h1 className='click-info'>Click for more</h1></a>
                    </div>
                </div>
            </section>
            <section id="footer">
                <div className='footer-container'>
                    <ul className='footer-links'>
                        <li><h3>Contact us</h3></li>
                        <li><h3>Acount Services</h3></li>
                        <li><h3>Shopping Guide</h3></li>
                        <li>
                            <h3 className='social-title'>Social Media</h3>
                            <p>Instagram</p><img src= {insta} className='social-icon' alt="insta" />
                            <p>Facebook</p> <img src= {facebook} className='social-icon' alt="facebook" />
                            <p>X</p> <img src= {twitter} className='social-icon' alt="twitter" />

                        </li>
                    </ul>
                </div>
            </section>
        </>

    )
}

export default HomePage;