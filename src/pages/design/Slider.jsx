import React, { useState } from 'react';
import './DesignStyles.css';

const images = [
    {
        frontSide: 'src/assets/img-blouse.png',
        backSide: 'src/assets/back-side.png'
    },
    {
        frontSide: 'src/assets/img-blouse-woman.png',
        backSide: 'src/assets/back-side.png'
    },
    {
        frontSide: 'src/assets/green-blouse.png',
        backSide: 'src/assets/back-side.png'
    }
];

function Slider({ side }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div>
            <div className="slider-container">
                <button className="arrow left" onClick={goToPrevious}>‹</button>

                <img
                    src={side ? images[currentIndex].frontSide : images[currentIndex].backSide}
                    alt={`Slide ${currentIndex} ${side ? 'Front' : 'Back'}`}
                    className="slider-image"
                />

                <div className="block-square"></div>

                <button className="arrow right" onClick={goToNext}>›</button>
            </div>

            <div className="block-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={side ? image.frontSide : image.backSide}
                        alt={`Slide ${index} ${side ? 'Front' : 'Back'}`}
                        className="slider-thumbnail"
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}


export default Slider;
