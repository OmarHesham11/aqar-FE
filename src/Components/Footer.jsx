// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../assets/style/footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <>   
    <footer className="footer-section bg-dark text-light">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Egypt, Giza, Haram street</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>01007788997</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-mail-bulk"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>habosa2000@hotmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img src="imgs/Sand-Trips-Final-1.png" className="img-fluid" alt="logo" />
                </div>
                <div className="footer-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At explicabo iusto
                    blanditiis
                    consequuntur aliquam voluptate officia dolorem aspernatur, quidem est tempore,
                    itaque non ipsam
                    porro inventore perspiciatis dicta et nisi.</p>
                </div>

              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href=".\index.html">Home</a>
                  </li>
                  <li>
                    <a href=".\about.html">about</a>
                  </li>
                  <li>
                    <a href="">services</a>
                  </li>
                  <li>
                    <a href="">About us</a>
                  </li>
                  <li>
                    <a href="">Our Services</a>
                  </li>
                  <li>
                    <a href="">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Dont miss to subscribe us</p>
                </div>
                <div className="row my-5 mx-5">
                  <div className="col-md-4 col-xs-4 position-relative">
                    <div className="social-menu ">
                      <ul>
                        <li>
                          <a href="" className='fab'><FacebookIcon /></a>
                        </li>
                        <li>
                          <a href="" className='fab'><TwitterIcon /></a>
                        </li>
                        <li>
                          <a href="" className='fab'><InstagramIcon /></a>
                        </li>
                        <li>
                          <a href="" className='fab'><YouTubeIcon /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    

      <div className="text-center p-3 text-light last-footer">
        © 2022 Copyright:
        <a className="badge badge-light">sandtrips.com</a>
      </div>
    </footer>
    </>
  )
}

export default Footer