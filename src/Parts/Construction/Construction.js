import { Link } from "react-router-dom";
// Components
import HedSection from "../../Components/Hed-Section/Hed-Section";
// Css
import "./Construction.css";

// Fake Server
const data = [
  {
    id: 1,
    frontIcon: "icon-building",
    frontTitle: "buildings",
    frontContent:
      "From skyscrapers to residential communities, we transform architectural visions into reality, blending functionality with aesthetic appeal.",
    backTitle: "art fully crafted",
    backContent:
      "Each project is meticulously designed and built with an eye for detail, ensuring both beauty and durability in every element.",
  },

  {
    id: 2,
    frontIcon: "icon-refresh",
    frontTitle: "renovate",
    frontContent:
      "Our renovation services revitalize and transform existing spaces, adding modern touches and enhanced functionality.",
    backTitle: "freshly new",
    backContent:
      "Creating spaces that feel fresh, modern, and uniquely designed to fit your vision and lifestyle.",
  },

  {
    id: 3,
    frontIcon: "icon-home",
    frontTitle: "construct",
    frontContent:
      "From the ground up, we handle every aspect of construction with expertise and precision, delivering high-quality results.",
    backTitle: "perfect lines",
    backContent:
      "Precision is key. Our team ensures flawless lines and seamless finishes in all our projects, adding elegance to structure.",
  },

  {
    id: 4,
    frontIcon: "icon-truck",
    frontTitle: "exclusive",
    frontContent:
      "We specialize in exclusive, tailor-made projects that reflect your unique vision and style.",
    backTitle: "planning",
    backContent:
      "With expertise in planning, we ensure every step is streamlined and on schedule for maximum efficiency and effectiveness.",
  },
];

function Construction() {
  return (
    <div className="construction">
      <div className="container">
        <HedSection
          title="specialists in modern construction"
          content="Ahmed Construction brings innovation, quality, and precision to every project. From contemporary buildings to luxury renovations, our team is dedicated to creating spaces that inspire and endure."
        />

        <div className="parent-items">
          {data.map((item) => {
            const {
              id,
              frontIcon,
              frontTitle,
              frontContent,
              backTitle,
              backContent,
            } = item;

            return (
              <div key={id} className="card-parent">
                <div className="rotatory-card">
                  <section className="card-front">
                    <i className={`card-front-icon ${frontIcon}`}></i>
                    <h3 className="title-md">{frontTitle}</h3>
                    <p>{frontContent}</p>
                  </section>

                  <section className="card-back">
                    <h4 className="title-sm">{backTitle}</h4>
                    <p>{backContent}</p>
                    <Link to="/get-quote" className="btn btn-secondary">
                      get a quote
                    </Link>
                  </section>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Construction;
