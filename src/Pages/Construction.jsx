// eslint-disable-next-line no-unused-vars
import React from 'react'
import sora from "../assets/imgs/construction.jfif"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { rgbToHex } from '@mui/material';

function Construction() {



  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",margin:"0px 5px",borderRadius:"30px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",margin:"0px 5px",overflow:"hidden",color:"black !important" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  


  return (
    <>
      <section className="row">

        <div className="col-md-12">
          <div className="sectionBody row">
            <div className="slider-container col-md-7 col-lg-5  row justify-content-center align-items-center">
              <Slider {...settings}>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
              </Slider>
            </div>

            <div className="col-md-5 col-lg-7 pargragh p-4">
              <h1>V Residences - December 2023</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste ipsum consectetur vel sapiente quaerat obcaecati minima odit perspiciatis reprehenderit!</p></div>
          </div>





          <div className="sectionBody row">
            <div className="col-md-5 col-lg-7 pargragh p-4">
              <h1>V Residences - December 2023</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste ipsum consectetur vel sapiente quaerat obcaecati minima odit perspiciatis reprehenderit!</p>
            </div>

            <div className="slider-container col-md-7 col-lg-5  row justify-content-center align-items-center">
              <Slider {...settings}>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
              </Slider>
            </div>
          </div>


          <div className="sectionBody row">
            <div className="slider-container col-md-7 col-lg-5  row justify-content-center align-items-center">
              <Slider {...settings}>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
                <div>
                  <h3><img src={sora} className="img-fluid" srcSet="" /></h3>
                </div>
              </Slider>
            </div>
            <div className="col-md-5 col-lg-7 pargragh p-4">
              <h1>V Residences - December 2023</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste ipsum consectetur vel sapiente quaerat obcaecati minima odit perspiciatis reprehenderit!</p>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Construction