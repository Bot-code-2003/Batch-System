import React from "react";
import testimonials from "../data/testimonials.json";
import Carousel from "react-elastic-carousel";
import { Row, Col } from "antd";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Testimonial = () => {
  return (
    <Row className="Testimonials p-5 font-nav-font text-center">
      <Col
        xs={24}
        lg={24}
        style={{
          width: "500px",
          marginBottom: "20px",
          textAlign: "center",
          margin: "0 auto 10px",
        }}
      >
        <p className="text-lg font-nav-font">TESTIMONIALS</p>
        <h1 className="font-nav-font font-bold text-4xl">
          What Our Users Say About Us?
        </h1>
      </Col>

      <Col xs={24} lg={24} className="p-10">
        <Carousel breakPoints={breakPoints}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="item font-nav-font">
              <div className="max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  className="h-14 w-14"
                  src={testimonial.img}
                  alt={testimonial.name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {testimonial.title}
                  </div>
                  <p className="text-gray-950 text-xl">{testimonial.content}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <div className="text-xl text-black">{testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default Testimonial;
