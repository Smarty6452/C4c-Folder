import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import BottomFooter from "./BottomFooter";
// import logo from "../../assets/img/logo.png"

const Footer = () => {
  return (
    <div className="m-footer">
     
      <div className="container details">
        <div className="row">
          {/* col-1  */}
          <div className="hello"></div>

          <div className="col-md-3 col-smm-6">
          <div className="footer-left">
            {/* <div className="phone">
              <img src={logo} alt="" srcset="" />
            </div> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          pulvinar feugiat quam, vitae aliquam.
        </p>
       
        <h6>QUESTIONS</h6>
        <div className="sub-content">
        <div className="no">1-888-123-456</div>
        <div className="social">
          <ul className="d-flex">
            <li>
              <AiOutlineInstagram size={20} />
            </li>
            <li>
              <FaFacebookF size={20} />
            </li>
            <li>
              <FaTwitter size={20} />
            </li>
          </ul>
        </div>
        </div>
       
      </div>
          </div>
          <div className="right-footer d-flex">
         
          <div className="col-md-3 col-smm-6">
            <ul>
              <h4>About us</h4>
              <li>About eCommerce </li>
              <li>Our Gurrantees </li>
              <li>Terms & Conditions </li>
              <li>Return Policy </li>
            </ul>
          </div>
          {/* col-2  */}
          <div className="col-md-3 col-smm-6">
            <ul>
              <h4>My Account</h4>
              <li>Track Your Order </li>
              <li>Payment Methods </li>
              <li>Shipping Guide </li>
              <li>FAQs </li>
              <li>Product Support </li>
              <li>Privacy </li>
            </ul>
          </div>
          {/* col-3  */}
          <div className="col-md-3 col-smm-6">
            <ul>
              <h4>Features</h4>
              <li>Interactive Fast React Template </li>
              <li>Unique Shop Layouts </li>
              <li>Powerfull Admin Portal </li>
              <li>Fully Responsive </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
         
      <BottomFooter />
    </div>
  );
};

export default Footer;
