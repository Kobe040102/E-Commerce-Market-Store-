import React, { useEffect, useRef } from 'react';
import pic1 from '../Images/Clothing-pic/clothe1.jpg';
import pic2 from '../Images/Clothing-pic/clothe2.jpg';
import pic3 from '../Images/Clothing-pic/clothe3.jpg';
import pic4 from '../Images/Clothing-pic/clothe4.jpg';
import pic5 from '../Images/Clothing-pic/Clothe5.jpg';
import pic6 from '../Images/Clothing-pic/clothe6.jpg';
import backarrow from '../Images/Clothing-pic/Back.png';
import nextarrow from '../Images/Clothing-pic/next.png';
import '../Style/Scroller.css';

function Scroller() {
    const galleryRef = useRef(null);
    const prevArrowRef = useRef(null);
    const nextArrowRef = useRef(null);

    useEffect(() => {
        const scrollContainer = galleryRef.current;
        const prevarrow = prevArrowRef.current;
        const forwardarrow = nextArrowRef.current;

        if (!scrollContainer) return;

        // Handle mouse wheel scrolling
        const handleWheelScroll = (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        };

        scrollContainer.addEventListener("wheel", handleWheelScroll);

        const handlePrevClick = () => {
            scrollContainer.scrollLeft -= 200; // Move left
        };

        const handleNextClick = () => {
            scrollContainer.scrollLeft += 200; // Move right
        };

        if (prevarrow) prevarrow.addEventListener("click", handlePrevClick);
        if (forwardarrow) forwardarrow.addEventListener("click", handleNextClick);

        // Cleanup event listeners
        return () => {
            scrollContainer.removeEventListener("wheel", handleWheelScroll);
            if (prevarrow) prevarrow.removeEventListener("click", handlePrevClick);
            if (forwardarrow) forwardarrow.removeEventListener("click", handleNextClick);
        };

    }, []);

    return (
        <div className='gallery-wrap'>
            <img src={backarrow} ref={prevArrowRef} id='backarrow' alt="previous" />
            <div className="gallery" ref={galleryRef}>
                <div>
                    <img src={pic1} alt="pic1" />
                    <img src={pic2} alt="pic2" />
                    <img src={pic3} alt="pic3" />
                </div>
                <div>
                    <img src={pic4} alt="pic4" />
                    <img src={pic5} alt="pic5" />
                    <img src={pic6} alt="pic6" />
                </div>
            </div>
            <img src={nextarrow} ref={nextArrowRef} id='nextarrow' alt="next" />
        </div>
    );
}

export default Scroller;
