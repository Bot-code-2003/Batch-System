import React from "react";
import Accordion from "./Accordion";
import data from "../../data/faq.json";
import { useMediaQuery } from "react-responsive";
import { Row, Col } from "antd";
import "../styles.css";

const FAQ = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767.98 });

  return (
    <Row
      className={`FAQ flex justify-center items-center font-nav-font p-5 ${
        isSmallDevice ? "flex-col" : ""
      }`}
    >
      {" "}
      <Col xs={24} className="p-5">
        <h1 className="font-nav-font font-bold text-4xl p-2 text-center leading-[1.5]">
          Frequently Asked Questions
        </h1>
      </Col>
      <Col
        xs={24}
        className="font-nav-font bg-gradient-to-r p-5 rounded-xl flex justify-center from-primary to-orange-600"
        style={{ width: "80%" }}
      >
        <div className="p-5 bg-gray-200 rounded-xl" style={{ width: "80rem" }}>
          {data.map((faq) => (
            <Accordion title={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default FAQ;
