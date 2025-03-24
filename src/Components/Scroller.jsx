import pic1 from '../Images/Clothing-pic/clothe1.jpg';
import pic2 from '../Images/Clothing-pic/clothe2.jpg';
import pic3 from '../Images/Clothing-pic/clothe3.jpg';
import pic4 from '../Images/Clothing-pic/clothe4.jpg';
import pic5 from '../Images/Clothing-pic/Clothe5.jpg';
import backarrow from '../Images/Clothing-pic/Back.png';
import nextarrow from '../Images/Clothing-pic/next.png'
import '../Style/Scroller.css';
function Scroller() {
    return (
        <>
        <div className='gallery-wrap'>
            <img src={backarrow} className='arrows' alt="nextarrow" />
            <div className="gallery">
                <div>
                    <img src={pic1} alt="pic1" />
                    <img src={pic2} alt="pic2" />
                    <img src={pic3} alt="pic3" />
                </div>
                <div>
                    <img src={pic4} alt="pic4" />
                    <img src={pic5} alt="pic5" />
                </div>
            </div>
            <img src={nextarrow} className='arrows' alt="nextarrow" />
        </div>
        </>
    )
}

export default Scroller;