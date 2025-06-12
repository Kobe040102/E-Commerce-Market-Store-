import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hat1 from '../Images/Accessories/Hat1.jpg';
import Hat2 from '../Images/Accessories/Hat2.jpg';
import Hat3 from '../Images/Accessories/Hat3.jpg';
import Glasses1 from '../Images/Accessories/Ray Ban.jpg';
import Glasses2 from '../Images/Accessories/Glasses2.jpg';
import Glasses3 from '../Images/Accessories/3d glasses.jpg';
import watch1 from '../Images/Accessories/Rolex watch.jpg';
import watch2 from '../Images/Accessories/Fossil watch.jpg';
import Necklace1 from '../Images/Accessories/Diamond_necklace.jpg';
import Necklace2 from '../Images/Accessories/Gold chain.jpg';
import Necklace3 from '../Images/Accessories/Heart Necklace.jpg';
import '../Style/AccessoriesStyle.css';
function Accessories() {
    return(
        <>
        <Navbar />
        <section id="main">
        <div className='Clothing-container'>
                    <h1 className='Clothing-title'> Fashion Accessories</h1>
                    <div className='Acess-container'>
                        <h1 className='proc-title'>Hats</h1>
                        <ul className='sec-proc'>
                            <li>
                                <img src= {Hat1} className='product-img' alt="" />
                                <h1 className='products'>VA RVCA Hat</h1>
                                    <h2 className='prices'>$20.30</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                            </li>
                            <li>
                                <img src={Hat2} className='product-img' alt="" />
                                <h1 className='products'>Tree Hat</h1>
                                    <h2 className='prices'>$15.00</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                            </li>
                            <li>
                                <img src={Hat3} className='product-img' alt="" />
                                <h1 className='products'>Ice Cream Hat</h1>
                                    <h2 className='prices'>$12.99</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div className='Pants-container'>
                    <h1 className='proc-title'>Sun Glasses</h1>
                    <ul className='sec-proc'>
                        <li>
                            <img src={Glasses1} className='product-img' alt="" />
                            <h1 className='products'>Ray-Ban's</h1>
                                    <h2 className='prices'>$12.99</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                            
                        </li>
                        <li>
                            <img src={Glasses3} className='product-img' alt="" />
                            <h1 className='products'>3D Glasses</h1>
                                    <h2 className='prices'>$2.99</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                        <li>
                            <img src={Glasses2} className='product-img' alt="" />
                            <h1 className='products'>Round Glasses</h1>
                                    <h2 className='prices'>$12.99</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                    </ul>
                    </div>
                    <div className='Jacket-container'>
                    <h1 className='proc-title'>Watches</h1>
                    <ul className='sec-proc'>
                        <li>
                            <img src={watch1} className='product-img' alt="" />
                            <h1 className='products'>Rolex Watch</h1>
                                    <h2 className='prices'>$115.99</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                        <li>
                            <img src={watch2} className='product-img' alt="" />
                            <h1 className='products'>Fossil Watch</h1>
                                    <h2 className='prices'>$79.50</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                    </ul>
                    </div>
                    <div className='Shoe-container'>
                    <h1 className='proc-title'>Necklaces</h1>
                    <ul className='sec-proc'>
                        <li>
                            <img src={Necklace1} className='product-img' alt="" />
                            <h1 className='products'>Diamond Necklace</h1>
                                    <h2 className='prices'>$105.20</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                        <li>
                            <img src={Necklace2} className='product-img' alt="" />
                            <h1 className='products'>Gold Chain</h1>
                                    <h2 className='prices'>$85.00</h2>
                                    <div className='btn-container'>
                                <button className='Add-btn'><h1 className='cart-ad'>Add to cart</h1></button>
                            </div>
                        </li>
                        <li>
                            <img src={Necklace3} className='product-img' alt="" />
                            <h1 className='products'>Heart Necklace</h1>
                                    <h2 className='prices'>$40.99</h2>
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

export default Accessories;