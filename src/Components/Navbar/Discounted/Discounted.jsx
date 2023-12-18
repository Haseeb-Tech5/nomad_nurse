import React, { useEffect } from "react";
import "./Discounted.css"; // Import your CSS file for styling
import Logo from "../../../Assetss/tooth.png";
import Vector from "../../../Assests/Vector.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Data = [
  { animation: "fadeInFromLeft", text: "Efficiency" },
  { animation: "fadeOutToRight", text: "Efficiency" },
  { animation: "fadeInFromRight", text: "Convenience" },
  { animation: "fadeOutToBottom", text: "Convenience" },
  { animation: "fadeInFromBottom", text: "Reliability" },
  { animation: "fadeOutToTop", text: "Reliability" },
  { animation: "fadeInFromTop", text: "Flexibility" },
  { animation: "fadeOutToLeft", text: "Flexibility" },
  { animation: "fadeInFromLeft", text: "Transparency" },
  { animation: "fadeOutToBottom", text: "Transparency" },
  { animation: "fadeInFromBottom", text: "Instantaneous Bookings" },
  { animation: "fadeOutToRight", text: "Instantaneous Bookings" },
];

const Discounted = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);

  const [counter, setCounter] = React.useState(0);
  const [data, setData] = React.useState(Data[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % Data.length);
    }, 700);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []); // Empty dependency array to run effect only once on mount

  useEffect(() => {
    setData(Data[counter]);
  }, [counter]);

  return (
    <div className="discounted-container">
      <div className="left-side2" data-aos="zoom-in">
        <p className={data.animation}>{data.text}</p>
        <img src={Vector} alt="Image" className="logo3" />
      </div>
      <div
        className="right-side2"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="500"
      >
        <img src={Logo} alt="Logo" className="logo2" data-aos="zoom-in" />
        <h2 data-aos="zoom-in" data-aos-duration="800">
          Why <span style={{ color: "#497367" }}>Practices</span> should join
          us!
        </h2>
        <p data-aos="zoom-in" data-aos-duration="800">
          At Nomad Nurse, we invite dental practices to elevate their staffing
          experience by joining our dynamic platform. We understand the pivotal
          role that a skilled dental nurse plays in ensuring the smooth
          functioning of a practice. Our user-friendly interface streamlines the
          recruitment process, allowing you to find the perfect match quickly
          and efficiently. Join us in transforming the way you staff your
          practice and experience the convenience of finding the right dental
          nurse with ease.
        </p>
        <button data-aos="zoom-in" data-aos-duration="600">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Discounted;
