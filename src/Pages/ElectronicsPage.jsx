import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BlueIphone from '../Images/Electronics/Blue_Iphone.jpg';
function Electronics() {
    return(
        <>
            <Navbar />
            <section id="main">
            <div className='Clothing-container'>
                    <h1 className='Clothing-title'>Electronics</h1>
                <div className='Shirt-container'>
                        <h1 className='proc-title'>Phones</h1>
                        <div className='image-container'>
                            <img src={BlueIphone} alt="" />
                        </div>
                    </div>
                    <div className='Pants-container'>
                    <h1 className='proc-title'>Computers</h1>
                    </div>
                    <div className='Jacket-container'>
                    <h1 className='proc-title'>Game Consoles</h1>
                    </div>
                    <div className='Shoe-container'>
                    <h1 className='proc-title'>Tv</h1>
                </div>
            </div>
            </section>
            <Footer />
        </>
    )
}

export default Electronics;