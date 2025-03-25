import '../Style/Home.css';
import shirt from '../Images/Best_Shirt.jpg';
import macbook from '../Images/MacBook.jpg';
import purse from '../Images/Purse.jpg';
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

            </section>
        </>

    )
}

export default HomePage;