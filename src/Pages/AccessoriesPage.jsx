import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
function Accessories() {
    return(
        <>
        <Navbar />
        <section id="main">
        <div className='Clothing-container'>
                    <h1 className='Clothing-title'> Fashion Accessories</h1>
                    <div className='Shirt-container'>
                        <h1 className='proc-title'>Hats</h1>
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