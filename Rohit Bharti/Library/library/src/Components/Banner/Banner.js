import React from "react";
import { Carousel, Button } from "react-bootstrap";
import IMG from "../../assets/img/1.jpg";
import IMG2 from "../../assets/img/2.jpg";
import IMG3 from "../../assets/img/3.jpg";




function content() {
  return (
    <>
      <Carousel className="banner" >
        <Carousel.Item className="cItem">
          <img className=" image " src={IMG} alt="First slide"  />
          
          <Carousel.Caption>
           
            <div className="content">
              <h1>New Hot Cosmetics !</h1>
              <span style={{'fontSize':'100px', 'color': 'black'}}>50% OFF</span>
             <div className="d-flex shop">
             <h5>STARTING AT $199</h5>
             <Button style={{'width': "163px", "height": '60px'}} variant="dark">Shop Now</Button>{' '}
             </div>
              
            
            </div>
          

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className="cItem" >
          <img className="image  " src={IMG2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className="cItem" >
          <img className=" " src={IMG3} alt="" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
    </>
  );
}

export default content;
