import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hat1 from '../Images/Accessories/Hat1.jpg';
import '../Style/AccessoriesStyle.css';
function Accessories() {
    return(
        <>
        <Navbar />
        <section id="main">
        <div className='Clothing-container'>
                    <h1 className='Clothing-title'> Fashion Accessories</h1>
                    <div className='Shirt-container'>
                        <h1 className='proc-title'>Hats</h1>
                        <ul>
                            <li>
                                <img src= {Hat1} className='product-img' alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className='Pants-container'>
                    <h1 className='proc-title'>Sun Glasses</h1>
                    </div>
                    <div className='Jacket-container'>
                    <h1 className='proc-title'>Watches</h1>
                    </div>
                    <div className='Shoe-container'>
                    <h1 className='proc-title'>Necklaces</h1>
                    </div>
                </div>
        </section>
        <Footer />
        </>
    )
}

export default Accessories;