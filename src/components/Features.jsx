import React from "react";
import iphone from "../assets/iPhone.png";
import features from "../data/features.json";
import { Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import "./styles.css";
import gradFull from "../assets/gradFull.png";

const Features = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767.98 });
  return (
    <Row className="relative Features p-5 flex justify-center">
      <img src={gradFull} className="absolute left-0" alt="" />
      <Col
        className="Features-img-col p-5 flex justify-center items-center"
        xs={24}
        md={24}
        lg={10}
      >
        <div className="relative fe-image">
          <img className="fe-img" src={iphone} alt="" />
        </div>
      </Col>
      <Col
        className="Features-data-col flex p-5 justify-center items-center"
        xs={24}
        md={24}
        lg={10}
      >
        <div style={{ width: "700px" }}>
          <div className="border-b border-gray-200">
            <p className="text-primary">{features.subHeading}</p>
            <h1 className="font-nav-font font-bold text-4xl mb-3 md:text-6xl">
              {features.mainHeading}
            </h1>
          </div>
          {features.features.map((feature) => (
            <>
              <div
                className={`flex items-center gap-2 mb-2 mt-2 ${
                  isSmallDevice ? "justify-center" : ""
                }`}
              >
                <img src={feature.image} alt="" className="mr-2" />
                <span className="font-bold font-nav-font text-xl ">
                  {feature.title}
                </span>
              </div>
              <p className="font-nav-font">{feature.description}</p>
            </>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Features;
