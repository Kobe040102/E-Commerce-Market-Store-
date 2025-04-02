import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Style/ClothingStyle.css';
function Clothes() {
    return(
        <>
        <Navbar />
            <section id="main">
                <div className='Clothing-container'>
                    <h1 className='Clothing-title'>Clothing</h1>
                    <div className='Shirt-container'>
                        <h1 className='proc-title'>Shirts</h1>
                        <div className='img-container'>

                        </div>
                    </div>
                    <div className='Pants-container'>
                    <h1 className='proc-title'>Pants</h1>
                    <div className='img-container'>

                    </div>
                    </div>
                    <div className='Jacket-container'>
                    <h1 className='proc-title'>Jackets</h1>
                    <div className='img-container'>

                    </div>
                    </div>
                    <div className='Shoe-container'>
                    <h1 className='proc-title'>Shoes</h1>
                    <div className='img-container'>
                        
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Clothes;