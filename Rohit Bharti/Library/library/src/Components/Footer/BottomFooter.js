import React from "react";
import { FaCcVisa, FaCcStripe, FaCcPaypal } from "react-icons/fa";

const BottomFooter = () => {
  return (
    <footer>
      <div className="container b-Footer">
        <div className="row">
          <div className="col-md-12">
            <ul>
              <p className=" paragraph text-xs-center">
                &copy;{new Date().getFullYear()} Porto eCommerce 2021. All
                Rights Reserved.
              </p>
             
             
              
            <div className="pay-icon">
                  <ul>
                    <li><a href="/"><FaCcVisa size={40} /></a></li>
                    <li><a href="/"><FaCcPaypal size={40}/></a></li>
                    <li> <a href="/"><FaCcStripe size={40}/></a></li>
                  </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
