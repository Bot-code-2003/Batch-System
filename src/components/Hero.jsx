import React from "react";
import iphone from "../assets/iPhone-13-Pro-Front.svg";
import eclipsegrp from "../assets/eclipsegrp.png";
import tag from "../assets/tag.png";
import "./styles.css";
import star from "../assets/Star.png";
import { useMediaQuery } from "react-responsive";
import { Row, Col } from "antd";
import grad from "../assets/gradiant.png";
import grad1 from "../assets/gradiant1.png";

const Hero = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767.98 });
  return (
    <Row className="Hero relative p-5 mt-5 flex flex-col md:flex-row items-start justify-center">
      <img
        src={grad}
        className="absolute top-0 left-0 transform rotate-180"
        alt=""
      />
      {/* <img
        src={grad1}
        className="absolute right-0 bottom-0 transform rotate-360"
        alt=""
      /> */}
      <Col sm={24} xs={24} lg={10} className="Hero-col flex flex-col gap-5">
        <h1
          className="font-nav-font font-bold text-4xl md:text-6xl"
          style={{ maxWidth: "618px" }}
        >
          Make The Best Financial Decisions
        </h1>
        <p className="font-nav-font text-base" style={{ maxWidth: "550px" }}>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <button
            className="Button bg-black text-lg md:text-2xl flex gap-2 p-4 md:p-6 pl-10 pr-10 text-white font-nav-font w-auto"
            style={{ borderRadius: "4px" }}
          >
            <p className="text-lg">Get Started</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <button
            className="Button-I text-lg md:text-2xl p-4 md:p-6 pl-10 pr-10 flex gap-2 font-nav-font font-semibold w-auto"
            style={{ borderRadius: "4px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
            <p className="text-lg">Watch Video</p>
          </button>
        </div>
        <div className="relative">
          <img
            src={star}
            alt=""
            className="absolute h-9 top-5 left-10 transform rotate-6"
          />
          <img src={tag} alt="" />
        </div>
      </Col>
      {isSmallDevice ? (
        ""
      ) : (
        <Col
          lg={10}
          className="relative mt-5 md:mt-0"
          style={{ width: "100%", maxWidth: "500px", height: "auto" }}
        >
          <img src={iphone} alt="" className="hero-img1" />
          <img src={iphone} alt="" className="hero-img2" />
          <img src={iphone} alt="" className="hero-img3" />
          <img src={eclipsegrp} alt="" className="hero-eclipse" />
        </Col>
      )}
    </Row>
  );
};

export default Hero;
