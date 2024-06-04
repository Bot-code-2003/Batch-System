import React from "react";
import iphone from "../assets/iPhone.png";
import advantages from "../data/advantages.json";
import star from "../assets/star-bg.png";
import { Row, Col } from "antd";
import "./styles.css";
import gradFull from "../assets/gradFull.png";
import gradFull1 from "../assets/gradFull1.png";

const Advantages = () => {
  return (
    <>
      <Row className="relative Features flex items-center justify-center p-5">
        <Col
          xs={{ span: 24, order: 2 }}
          lg={{ span: 10, order: 1 }}
          className="Features-data-col flex flex-col gap-5 p-5 text-lg"
          style={{ width: "700px" }}
        >
          <div className="border-b border-gray-200">
            <p className="text-primary">ADVANTAGES</p>
            <h1 className="font-nav-font font-bold text-4xl mb-3 md:text-6xl">
              Why Choose Uifry?
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 justify-center items-center ">
              <img src={star} alt="" />
              <span className="font-bold font-nav-font text-xl ">
                Clever Notifications
              </span>
            </div>
            <p className="font-nav-font">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </Col>
        <img src={gradFull} className="absolute -z-10 top-64 left-0" alt="" />
        <Col
          xs={{ span: 24, order: 1 }}
          lg={{ span: 10, order: 2 }}
          className="flex p-5 justify-center relative Features-img-col"
        >
          <div className="relative fe-image">
            <img className="fe-img" src={iphone} alt="" />
          </div>
        </Col>
      </Row>

      {/* ADV-2 */}
      <Row className="relative Features flex items-center p-5 justify-center font-nav-font">
        <Col
          xs={24}
          lg={10}
          className="flex p-5 justify-center relative Features-img-col"
        >
          <div className="relative fe-image">
            <img className="fe-img" src={iphone} alt="" />
          </div>
        </Col>
        <img src={gradFull1} className="absolute -z-10 top-30 right-0" alt="" />
        <Col
          xs={24}
          lg={10}
          className="Features-data-col p-5 flex flex-col gap-5 text-lg"
          style={{ width: "600px" }}
        >
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 justify-center items-center ">
              <img src={star} alt="" />
              <span className="font-bold font-nav-font text-xl ">
                Fully Customizable
              </span>
            </div>
            <p className="font-nav-font">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Advantages;
