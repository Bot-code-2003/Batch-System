import React from "react";
import { Row, Col } from "antd";
import iphone from "../assets/iPhone-footer.png";
import star from "../assets/star-white.png";
import { useMediaQuery } from "react-responsive";
import eclipse from "../assets/eclipse-white.png";
import "./styles.css";

const Final = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767.98 });
  return (
    <Row className="m-5 rounded-lg flex justify-center bg-black relative">
      <img
        className="absolute left-10 top-10 transform rotate-6"
        src={star}
        alt=""
      />
      <img
        className="absolute h-10 right-100 z-10 bottom-10 transform rotate-3"
        src={star}
        alt=""
      />
      <Col
        xs={`${isSmallDevice ? 24 : 16}`}
        lg={16}
        className="relative px-5 py-10 flex flex-col justify-center items-center gap-5"
      >
        <h1 className="font-nav-font font-bold text-4xl text-white">
          Ready To Get Started?
        </h1>
        <p className="font-nav-font text-base text-white">
          Random Ranodm text this is a. Random Random text this is a.
        </p>
        <button
          className="Button bg-white text-lg md:text-2xl flex gap-2 p-4 md:p-6 pl-10 pr-10 text-black font-bold font-nav-font w-auto"
          style={{ borderRadius: "4px" }}
        >
          <p className="text-lg">Download App</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>
        </button>
      </Col>
      <img
        className={`absolute left-0 bottom-0 ${
          isSmallDevice ? "final-img-small" : ""
        }`}
        src={eclipse}
        alt=""
      />
      {isSmallDevice ? (
        ""
      ) : (
        <Col xs={8} lg={8} className="py-5 pl-5 pr-0">
          <img src={iphone} alt="" />
        </Col>
      )}
    </Row>
  );
};

export default Final;
