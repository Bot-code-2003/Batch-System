import React from "react";
import { Row, Col } from "antd";
import "./styles.css";
import mail from "../assets/mail.png";
import cell from "../assets/cell.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <Row className="p-5 flex gap-4  justify-around">
        <Col xs={10} lg={4} className="p-5">
          <div className="flex gap-2 justify-start items-center mb-2">
            <img src={logo} alt="" />
            <h1 className="text-xl font-bold">Uifry</h1>
          </div>
          <div className="flex gap-2 justify-start items-center mb-2">
            <img src={mail} alt="" />
            <p>example@gmail.com</p>
          </div>
          <div className="flex gap-2 justify-start items-center mb-2">
            <img src={cell} alt="" />
            <p>+91 123812893</p>
          </div>
        </Col>
        <Col xs={10} lg={4} className="p-5">
          <h1 className="text-xl font-bold mb-2">Links</h1>
          <p>Home</p>
          <p>Pricing</p>
          <p>About Us</p>
          <p>OKOK</p>
        </Col>
        <Col xs={10} lg={4} className="p-5">
          <h1 className="text-xl font-bold mb-2">Legal</h1>
          <p>Terms and co</p>
          <p>Privacy asd pl</p>
          <p>Cookie polocity</p>
        </Col>
        <Col xs={10} lg={4} className="p-5">
          <h1 className="text-xl font-bold mb-2">Product</h1>
          <p>Take Tour</p>
          <p>Live Chat</p>
          <p>Review</p>
        </Col>
        <Col xs={10} lg={4} className="p-5">
          <h1 className="text-xl font-bold mb-2">News Letter</h1>
          <form className="flex flex-col gap-1 justify-stretch" action="">
            <input
              className="p-3 border border-black rounded-sm"
              type="text"
              placeholder="Your Email"
            />
            <button
              className="Button bg-black p-3 pl-6 pr-6 text-xl text-white font-nav-font w-auto"
              style={{ borderRadius: "4px" }}
            >
              Subscribe
            </button>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
