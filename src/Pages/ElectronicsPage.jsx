import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BlueIphone from '../Images/Electronics/Blue_Iphone.jpg';
import GalaxyPhone from '../Images/Electronics/Galaxy_Phone.jpg';
import Andriod from '../Images/Electronics/Andriod Phone.png';
import Applelaptop from '../Images/Electronics/Apple-Laptop2.jpg';
import Tablet from '../Images/Electronics/Apple_Tablet.jpg';
import GamingPc from '../Images/Electronics/Gaming PC.jpg';
import Nintendo from '../Images/Electronics/Nintendo-Switch.jpg';
import PS5 from '../Images/Electronics/Ps5-2.jpg';
import Xbox from '../Images/Electronics/Xbox.jpg';
import '../Style/ElectronicsStyle.css'
function Electronics() {
    return(
        <>
            <Navbar />
            <section id="main">
            <div className='Elec-container'>
                    <h1 className='Clothing-title'>Electronics</h1>
                <div className='Shirt-container'>
                        <h1 className='proc-title'>Phones</h1>
                        <div className='image-container'>
                            <ul className='sec-proc'>
                                <li>
                                    <img src={BlueIphone} className='product_img' alt="Phone" />
                                    <h1 className='products'>IPhone 12</h1>
                                    <h2 className='prices'>$250.00</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                                </li>

                                <li>
                                    <img src= {GalaxyPhone} className="product_img" alt="Phone" />
                                    <h1 className='products'>Galaxy Phone</h1>
                                    <h2 className='prices'>$365.70</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                                </li>
                                <li>
                                    <img src= {Andriod} className='product_img' alt="Phone" />
                                    <h1 className='products'>Andriod Phone</h1>
                                    <h2 className='prices'>$139.65</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='Pants-container'>
                    <h1 className='proc-title'>Computers</h1>
                    <div className='image-container'>
                        <ul className='sec-proc'>
                            <li>
                                <img src={Applelaptop} className='product_img' alt="" />
                                <h1 className='products'>MacBook</h1>
                                <h2 className='prices'>$1,150.00</h2>
                                <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                            </li>
                            <li>
                                <img src={GamingPc} className='product_img' alt="" />
                                <h1 className='products'>Gaming PC</h1>
                                <h2 className='prices'>$1050.35</h2>
                                <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                            </li>
                            <li>
                                <img src={Tablet} className="product_img" alt="" />
                                <h1 className='products'>Apple Tablet</h1>
                                <h2 className='prices'>$599.75</h2>
                                <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className='Jacket-container'>
                    <h1 className='proc-title'>Game Consoles</h1>
                    <ul className='sec-proc'> 
                    <li>
                        <img src={Nintendo} className="product_img"alt="" />
                        <h1 className='products'>Nintendo</h1>
                        <h2 className='prices'>$299.99</h2>
                        <div className='btn-container'>
                            <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                        </div>
                    </li>
                    <li>
                        <img src={Xbox} className='product_img' alt="" />
                        <h1 className='products'>Xbox</h1>
                        <h2 className='prices'>$380.75</h2>
                        <div className='btn-container'>
                            <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                        </div>
                    </li>
                    <li>
                        <img src={PS5} className='product_img' alt="" />
                        <h1 className='products'>PS5</h1>
                        <h2 className='prices'>$499.75</h2>
                        <div className='btn-container'>
                            <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                        </div>
                    </li>
                    </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Electronics;