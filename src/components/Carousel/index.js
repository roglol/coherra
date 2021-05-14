import React  from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Carousel = () =>{
    const settings = {
        className: "center",
        infinite: true,
        arrows:true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                centerPadding: "0px",
                slidesToShow: 1,
              }
            }
          ]
      };
      return (
        <section className='slider-wrapper'>
          <Slider {...settings}>
            <div>
                <div className="slide-header">
                    <img src="https://harbour.space/images/scholarship/apply-img.png" alt='img'/>
                <h1>
                    <div>
                    <span>Irine Pereyra</span>
                    <span>Interaction Design Fellow '19</span>
                    </div>
                </h1>
                </div>
                <div className="slide-body">
                    This Fellowship was a turning point in my carrer.
                    I wouldn't be where I am today without the 
                    financial support and experience offered
                    throug the program.
                </div>
                <div className="slide-footer">
                  <span>Education   B.A Visual Design</span>
                </div>
            </div>
            <div>
                <div className="slide-header">
                <img src="https://harbour.space/images/scholarship/apply-img.png" alt='img'/>
                <h1>
                <div>
                    <span>Irine Pereyra</span>
                    <span>Interaction Design Fellow '19</span>
                    </div>
                </h1>
                </div>
                <div className="slide-body">
                    This Fellowship was a turning point in my carrer.
                    I wouldn't be where I am today without the 
                    financial support and experience offered
                    throug the program.
                </div>
                <div className="slide-footer">
                  <span>Education   B.A Visual Design</span>
                </div>
            </div>
            <div>
                <div className="slide-header">
                <img src="https://harbour.space/images/scholarship/apply-img.png" alt='img'/>
                <h1>
                <div>
                    <span>Irine Pereyra</span>
                    <span>Interaction Design Fellow '19</span>
                    </div>
                </h1>
                </div>
                <div className="slide-body">
                    This Fellowship was a turning point in my carrer.
                    I wouldn't be where I am today without the 
                    financial support and experience offered
                    throug the program.
                </div>
                <div className="slide-footer">
                  <span>Education   B.A Visual Design</span>
                </div>
            </div>
            <div>
                <div className="slide-header">
                <img src="https://harbour.space/images/scholarship/apply-img.png" alt='img'/>
                <h1>
                <div>
                    <span>Irine Pereyra</span>
                    <span>Interaction Design Fellow '19</span>
                    </div>
                </h1>
                </div>
                <div className="slide-body">
                    This Fellowship was a turning point in my carrer.
                    I wouldn't be where I am today without the 
                    financial support and experience offered
                    throug the program.
                </div>
                <div className="slide-footer">
                  <span>Education   B.A Visual Design</span>
                </div>
            </div>
          </Slider>
        </section>
      );
}
export default Carousel;