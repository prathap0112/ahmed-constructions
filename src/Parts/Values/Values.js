// Components
import HedSection from "../../Components/Hed-Section/Hed-Section";
// Css
import "./Values.css";

// Fake Server
const data = [
  {
    id: 1,
    icon: "icon-home",
    title: "great services",
    content:
      "We believe in delivering exceptional service from concept to completion.",
  },

  {
    id: 2,
    icon: "icon-setting",
    title: "highest standards",
    content:
      "Quality and excellence define every step of our process, ensuring high standards across all projects.",
  },

  {
    id: 3,
    icon: "icon-users",
    title: "professional team",
    content:
      "Our team of skilled professionals brings expertise, creativity, and dedication to each project.",
  },

  {
    id: 4,
    icon: "icon-bulb",
    title: "creative solutions",
    content:
      "We offer unique, innovative solutions tailored to meet the specific needs of every client.",
  },
];

function Values() {
  return (
    <div className="values">
      <div className="container">
        <HedSection
          title="our core values"
          content="Guiding principles that drive our commitment to quality, innovation, and customer satisfaction."
        />

        <div className="parent-items">
          {data.map((item) => {
            const { id, icon, title, content } = item;

            return (
              <section key={id} className="loop-card">
                <div className="parent-icon">
                  <i className={`loop-icon ${icon}`}></i>
                  <h3 className="title-sm subline">{title}</h3>
                </div>

                <p>{content}</p>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Values;
