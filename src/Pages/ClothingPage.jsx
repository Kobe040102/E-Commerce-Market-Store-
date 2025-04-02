import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Style/ClothingStyle.css';
function Clothes() {
    return(
        <>
        <Navbar />
            <section id="main">
                <div>
                    <h1 className='Clothing'>Clothing</h1>
                </div>
            </section>
            <Footer />
            
        </>
    )
}

export default Clothes;