import "./Slider.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Slider() {
  let current = 0;
  function moveSlider(dircition) {
    if (dircition == "next") {
      if (current == images.length - 1) current = 0;
      else current++;
    }
    if (dircition == "prev") {
      if (current == 0) current = images.length - 1;
      else current--;
    }
    const slide = document.querySelector(".slider-container");
    let move = -current * 100;
    slide.style.transform = `translateX(${move}%)`;
  }
  const images = [
    "/images/banner-01.jpg",
    "/images/banner-02.jpg",
    "/images/banner-03.jpg",
  ];

  return (
    <div className="slider">
      <div className="slider-container">
        {images.map((ele, index) => (
          <img key={index} src={ele} />
        ))}
      </div>
      <div className="content-slider">
        <p>
          Toronto,<span>Canada</span>
        </p>
        <p>HURRY! GET THE BEST VILLA FOR YOU</p>
      </div>
      <div className="arrow">
        <div onClick={() => moveSlider("prev")}>
          <IoIosArrowBack size={30} />
        </div>
        <div onClick={() => moveSlider("next")}>
          <IoIosArrowForward size={30} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
