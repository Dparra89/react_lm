import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import '../styles/home.css';

const HompePage = (props) =>{

    const settings = {
        arrows:false,
        infinite: true,
        speed: 1000,
        autoplaySpeed:3000,
        fade:true,
        autoplay:true,
    }


    return(
        <div className="home">
            <Slider {...settings} >
            <img src="/images/img01.jpg" alt="img01"/>
            <img src="/images/img02.jpg" alt="img02"/>
            <img src="/images/img03.jpg" alt="img03"/>
            <img src="/images/img04.jpg" alt="img04"/>
            <img src="/images/img05.jpg" alt="img05"/>
            </Slider>
        </div>
    )
}

export default HompePage;
