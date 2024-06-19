import Slider from "react-slick";
import "./carousel.css";
function Carousel({ children }) {

    const settings = {
        dots: false,
        infinite: true, //true
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        //sildesToShow: 5,
        slidesToScroll: 1,
    }

    return (
        <>
            <div>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </>
    )
}

export default Carousel;