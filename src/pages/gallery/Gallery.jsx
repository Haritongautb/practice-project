import React from "react";
import MainTitle from "../../components/main-title/MainTitle";

const images = [
    "https://www.akc.org/wp-content/uploads/2017/11/Beagles-standing-in-a-frosty-field-on-a-cold-morning.jpg",
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/06/24151048/Beagle-standing-in-a-frosty-field-on-a-cold-morning.jpg",
    "https://static01.nyt.com/images/2022/07/26/multimedia/00xp-beagles-AP/00xp-beagles-AP-superJumbo-v2.jpg",
    "https://www.cesarsway.com/wp-content/uploads/2019/09/AdobeStock_219003378.jpeg"
]

const Gallery = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const handleNext = () => {
        if (currentSlide === images.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide => currentSlide + 1);
        }
    }

    const handlePrev = () => {
        if (currentSlide === 0) {
            setCurrentSlide(images.length - 1);
        } else {
            setCurrentSlide(currentSlide => currentSlide - 1);
        }
    }
    return (
        <section className="gallery">
            <div className="container">
                <div className="gallery__inner">
                    <MainTitle text={"galeria"} />

                    <div className="gallery__contents">

                        <div className="slide">
                            <button className="slide__prev" onClick={handlePrev}>
                                <svg width="48" height="40" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <path fill="#000000" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" />
                                </svg>
                            </button>
                            <div className="slide__img">
                                <img src={images[currentSlide]} alt="Slide images" />
                            </div>
                            <button className="slide__prev" onClick={handleNext}>
                                <svg width="48" height="40" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <path fill="#000000" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144M392 256H100" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;