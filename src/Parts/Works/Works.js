// Images
import Project01 from "../../Assets/Images/Project-01.jpg";
import Project02 from "../../Assets/Images/Project-02.jpg";
import Project03 from "../../Assets/Images/Project-03.jpg";
// Components
import HedSection from "../../Components/Hed-Section/Hed-Section";
import ImgShadow from "../../Components/Img-Shadow/Img-Shadow";
import BtnHide from "../../Components/Btn-Hide/Btn-Hide";

// Fake Server
const data = [
  {
    id: 1,
    image: Project01,
    alt: "Beatiful 2BHK House",
    link: "/project01",
    title: "beatiful 2BHK house",
    categories: ["residential"],
  },

  {
    id: 2,
    image: Project02,
    alt: "New Block For School",
    link: "/project02",
    title: "new block for school",
    categories: ["commercial"],
  },

  {
    id: 3,
    image: Project03,
    alt: "Project Masjid",
    link: "/project03",
    title: "project masjid",
    categories: ["commercial"],
  },
];

function Works() {
  return (
    <div className="works">
      <div className="container">
        <HedSection
          title="explore recent work"
          content="See our latest projects, each crafted with excellence and attention to detail."
        />

        <div className="parent-items">
          {data.map((item) => {
            const { id, image, alt, link, title, categories } = item;

            return (
              <div key={id}>
                <ImgShadow
                  image={image}
                  alt={alt}
                  link={link}
                  title={title}
                  categories={categories}
                ></ImgShadow>
              </div>
            );
          })}
        </div>

        <BtnHide link="/work" content="projects"></BtnHide>
      </div>
    </div>
  );
}

export default Works;
