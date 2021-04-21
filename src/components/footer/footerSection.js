import React from 'react';
import './footerSection.styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faFacebookMessenger,faInstagram} from '@fortawesome/free-brands-svg-icons'

const FooterSection = () => {
  return (
    <>
       <footer class="footer-section spad">
            {/* <div class="newslatter-form">
                <div class="row">
                    <div class="col-lg-12">
                        <form action="#">
                            <input type="text" placeholder="Your email address"/>
                            <button type="submit">Subscribe to our newsletter</button>
                        </form>
                    </div>
                </div>
            </div> */}
                <div class="footer-widget-container">
                        <div class="single-footer-widget">
                            <h4>About us</h4>
                            <ul>
                                <li>About Us</li>
                                <li>Community</li>
                                <li>Jobs</li>
                                <li>Shipping</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div class="single-footer-widget">
                            <h4>Customer Care</h4>
                            <ul>
                                <li>Search</li>
                                <li>Privacy Policy</li>
                                <li>2019 Lookbook</li>
                                <li>Shipping & Delivery</li>
                                <li>Gallery</li>
                            </ul>
                        </div>
                        <div class="single-footer-widget">
                            <h4>Our Services</h4>
                            <ul>
                                <li>Free Shipping</li>
                                <li>Free Returnes</li>
                                <li>Our Franchising</li>
                                <li>Terms and conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div> 
                       
                </div>
        
        <div className="social-links-warp">
		    <div className="social-link-container">
                <a href="#" target="_blank" className="facebook"><FontAwesomeIcon icon={faFacebook}   size={'5x'} className="f-icon"/></a>
                <a href="#" target="_blank" className="instagram"> <FontAwesomeIcon icon={faInstagram} size={'5x'} className="i-icon"/></a>
                <a href="#" target="_blank" className="youtube"> <FontAwesomeIcon icon={faFacebookMessenger} size={'5x'} className="m-icon"/></a>	
            </div>

            <div className="copywrite-container">
                <p>
                   &copy; 2020  All rights reserved
                </p>
            </div>
		</div>
    </footer>
    </>
  )
}

export default FooterSection
