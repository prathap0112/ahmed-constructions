import { useEffect, useState, useRef } from "react";
// Images
import HomeTestimonial01 from "../../Assets/Images/Home-Testimonial-01.jpg";
import HomeTestimonial02 from "../../Assets/Images/Home-Testimonial-02.webp";
// Css
import "./Slider.css";

// Fake Server
const data = [
  {
    id: 1,
    image: HomeTestimonial01,
    alt: "Testimonial",
    content:
      "We couldn't have asked for a better team to handle our renovation project. They exceeded our expectations and ensured everything was done on time. The professionalism was unmatched!",
    title: "Aravindan Kumar • new home owner",
  },

  {
    id: 2,
    image: HomeTestimonial02,
    alt: "Testimonial",
    content:
      "From the initial consultation to the final touch-ups, the team at Ahmed Construction was with us every step of the way. The design they provided us with has made our house feel more like a home.",
    title: "Kavitha Rajendran • property investor",
  },
];

function Slider() {
  const [slide, setIndex] = useState(0);
  const timeoutRef = useRef();

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  }, [slide]);

  return (
    <div className="slider">
      {data.map((item, index) => {
        const { id, image, alt, content, title } = item;

        return (
          <div
            key={id}
            className={`slide-item ${slide === index ? "show" : ""}`}
          >
            <img src={image} alt={alt} className="slide-img" />
            <blockquote className="slide-content">{content}</blockquote>
            <h3 className="title-sm">{title}</h3>
          </div>
        );
      })}

      <div className="radios">
        {data.map((item, index) => {
          return (
            <span
              key={index}
              className={`radio ${slide === index ? "target" : ""}`}
              onClick={() => setIndex(index)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
