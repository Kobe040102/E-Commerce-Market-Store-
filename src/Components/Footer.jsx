import '../Style/FooterStyle.css'
import facebook from'../Images/Icons/facebook.png';
import insta from '../Images/Icons/instagram.png';
import twitter from '../Images/Icons/twitter.png';

function Footer() {
    return(
        <>
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
export default Footer;