// Images
import ServicesTabs01 from "../../Assets/Images/Services-Tabs-01.jpg";
import ServicesTabs02 from "../../Assets/Images/Services-Tabs-02.webp";
import ServicesTabs04 from "../../Assets/Images/Services-Tabs-04.jpg";
import ServicesTabs03 from "../../Assets/Images/Services-Tabs-03.jpg";
import ServicesTabs05 from "../../Assets/Images/Services-Tabs-05.jpg";
import ServicesTabs06 from "../../Assets/Images/Services-Tabs-06.jpg";
import ServicesTabs07 from "../../Assets/Images/Services-Tabs-07.jpg";
import ServicesTabs08 from "../../Assets/Images/Services-Tabs-08.jpg";
import ServicesTabs09 from "../../Assets/Images/Services-Tabs-09.jpg";
import ServicesTabs10 from "../../Assets/Images/Services-Tabs-10.jpg";
// Css
import "./Accordion.css";

// Fake Server
const data = [
  {
    id: 1,
    target: "pane-01",
    listTitle: "services overview",
    title: "building inspiring spaces",
    contents: [
      "At Ahmed Construction, we are dedicated to transforming spaces and creating environments that reflect quality, functionality, and aesthetic appeal. Our comprehensive services cover every aspect of construction, renovation, and property maintenance, ensuring that our clients’ needs are met with precision and expertise. From residential projects to large-scale commercial developments, each service we offer is a testament to our commitment to excellence and customer satisfaction.",
      "Our team of experienced professionals brings together innovation and craftsmanship in every project, combining modern construction techniques with a personalized approach. Whether you are looking to build a new home, renovate an existing property, or maintain your commercial space, Ahmed Construction provides a one-stop solution tailored to fit your vision and requirements.",
      "We specialize in various categories, including new home construction, complete renovation, commercial projects, and handyman services. Each category is designed to offer a seamless experience, with detailed planning, timely execution, and quality assurance at every stage. We understand the importance of creating spaces that are not only functional but also inspire and uplift, making them a pleasure to live or work in.",
      "Our commitment to client satisfaction is at the core of everything we do. From the initial consultation to project completion, we work closely with our clients, providing updates, insights, and expert recommendations to ensure a smooth process. At Ahmed Construction, we believe in building long-lasting relationships, and we take pride in the trust our clients place in us for their construction needs.",
      "Safety, transparency, and accountability are values that define Ahmed Construction’s approach to every project. We adhere to the highest industry standards, implementing robust safety protocols and maintaining open communication with our clients. Our detailed project estimates and transparent pricing ensure that you are well-informed from start to finish, with no hidden surprises along the way.",
      "Ahmed Construction is more than just a construction company. We are a partner in helping you achieve your property dreams, whether through crafting new spaces, rejuvenating existing ones, or providing ongoing maintenance services. With a reputation built on trust, quality, and exceptional service, we look forward to bringing your vision to life with professionalism and care.",
    ],
    images: [
      { src: ServicesTabs01, alt: "Services Tabs" },
      { src: ServicesTabs02, alt: "Services Tabs" },
    ],
  },

  {
    id: 2,
    target: "pane-02",
    listTitle: "new homes",
    title: "Building Your Dream with Precision and Passion",
    contents: [
      "At Ahmed Construction, we specialize in creating custom homes that are a perfect blend of functionality and elegance. Our team brings together years of experience in the industry, offering expert guidance throughout the entire process. From the initial design concept to the final build, we ensure that every step is meticulously planned and executed with precision. We believe that a home is not just a structure, but a reflection of your personal style and aspirations.",
      "We take great pride in offering a tailored approach to each project, ensuring that the home we build for you is as unique as your vision. Our design team works closely with clients to understand their needs and preferences, ensuring every detail, from layout to materials, is thoughtfully chosen. Whether you're looking for a contemporary home, a classic design, or something in between, we have the expertise to bring your ideas to life.",
      "Our commitment to quality craftsmanship and attention to detail sets us apart from other builders. Every project we take on is completed with the highest standards of construction, ensuring that your new home is not only beautiful but also durable and long-lasting. We understand that building a home is a significant investment, and we treat every project with the respect it deserves.",
      "We also understand the importance of sustainability in today’s world. At Ahmed Construction, we focus on incorporating energy-efficient solutions and eco-friendly materials into all of our builds. Our goal is to create homes that are not only aesthetically pleasing but also energy-efficient and sustainable, reducing both your environmental impact and long-term living costs.",
      "Our team is committed to delivering a seamless experience from start to finish. We handle all aspects of the building process, including acquiring permits, managing subcontractors, and ensuring the timely completion of the project. We know that clear communication and transparency are essential, which is why we keep you informed at every stage of the process, giving you peace of mind.",
      "At Ahmed Construction, we don't just build homes—we build lasting relationships with our clients. We strive to exceed expectations and ensure that every project is a testament to our passion for creating spaces that truly feel like home. Let us bring your dream home to life with our dedication to excellence and a commitment to creating spaces that you and your family will love for years to come.",
    ],
    images: [
      { src: ServicesTabs03, alt: "Services Tabs" },
      { src: ServicesTabs04, alt: "Services Tabs" },
    ],
  },

  {
    id: 3,
    target: "pane-03",
    listTitle: "complete renovation",
    title: "complete renovation services",
    contents: [
      "At Ahmed Construction, our Complete Renovation services focus on transforming existing spaces to enhance both functionality and beauty. Whether it's a single room or an entire property, we take pride in revitalizing every inch of your space with expert craftsmanship. Our team listens carefully to understand your vision, blending your ideas with our design expertise to create spaces that feel refreshed and aligned with your lifestyle.",
      "From initial consultation to final touches, we ensure a seamless and stress-free experience. We begin with a comprehensive assessment of the space, identifying areas for improvement and suggesting design elements that match your preferences. Our team will guide you through selecting the best materials, colors, and finishes, all tailored to create a space that feels new yet remains true to its original charm.",
      "Our skilled professionals handle all aspects of the renovation, from structural changes to aesthetic upgrades. Whether you need new flooring, updated cabinetry, modern lighting, or custom fixtures, we manage every detail with precision and care. At Ahmed Construction, we ensure that your renovation adds lasting value, improving not only the appearance but also the functionality and durability of your space.",
      "We know that a successful renovation is about more than just design—it's about creating spaces that suit your everyday needs. That's why we prioritize open communication throughout the process, keeping you informed and engaged at each stage. Our goal is to make sure that the final result is exactly what you envisioned, a space that meets your needs and exceeds your expectations.",
      "In our commitment to quality, we also emphasize sustainable practices wherever possible. Our renovation projects incorporate eco-friendly materials and energy-efficient solutions, helping to create a space that’s both beautiful and environmentally responsible. This approach not only benefits the environment but can also contribute to lower energy costs, making your renovated space as practical as it is elegant.",
      "At Ahmed Construction, we view every renovation as an opportunity to turn potential into reality. With our dedication to excellence and a client-first approach, we strive to make each project a rewarding experience. Trust us to breathe new life into your space, transforming it into a place of comfort, beauty, and lasting value.",
    ],
    images: [
      { src: ServicesTabs05, alt: "Services Tabs" },
      { src: ServicesTabs06, alt: "Services Tabs" },
    ],
  },

  {
    id: 4,
    target: "pane-04",
    listTitle: "commercial project",
    title: "building commercial success",
    contents: [
      "Ahmed Construction specializes in creating dynamic commercial spaces that combine functionality, aesthetic appeal, and a welcoming atmosphere. Our Commercial Projects service is designed to help businesses elevate their environments, whether it’s an office, retail store, hospitality space, or other commercial property. We understand that a well-designed space can leave a lasting impression on clients and boost the productivity and morale of your team.",
      "Our approach begins with a comprehensive consultation, during which we work closely with you to understand the unique requirements of your business. We consider factors such as workflow, brand identity, and your company’s specific goals to design a space that aligns seamlessly with your vision. Our team will offer suggestions on layout, materials, and finishes that enhance both efficiency and visual appeal, creating a space that reflects your business’s personality.",
      "With extensive experience in commercial construction, Ahmed Construction handles every aspect of the project with expertise and attention to detail. From structural modifications to specialized installations, we ensure that each component is tailored to the unique demands of a commercial setting. Whether it’s creating private meeting rooms, collaborative workspaces, or customer-facing areas, our goal is to deliver a space that serves your business effectively.",
      "We are dedicated to meeting deadlines and adhering to budget constraints without compromising on quality. Our team of professionals coordinates with architects, designers, and contractors to streamline the construction process and minimize any disruptions to your operations. By providing regular updates and maintaining open communication, we ensure that you remain informed and in control throughout the project.",
      "In our commitment to quality, we also prioritize sustainable practices and innovative solutions in every commercial project. This includes energy-efficient lighting, eco-friendly materials, and smart technology integration, which not only supports the environment but also reduces operational costs. With our focus on functionality and sustainability, Ahmed Construction creates spaces that are both economically and environmentally advantageous.",
      "When it comes to commercial projects, we believe in building more than just walls and floors—we build environments that inspire success and drive growth. With our dedication to craftsmanship and a client-centered approach, we strive to exceed expectations at every step. Trust Ahmed Construction to create a commercial space that fosters productivity, reflects your brand, and stands as a testament to quality.",
    ],
    images: [
      { src: ServicesTabs07, alt: "Services Tabs" },
      { src: ServicesTabs08, alt: "Services Tabs" },
    ],
  },

  {
    id: 5,
    target: "pane-05",
    listTitle: "handyman services",
    title: "a tradesman for any size job",
    contents: [
      "Ahmed Construction’s Handyman Services offer a reliable solution for all your repair, maintenance, and installation needs, ensuring that your property stays in optimal condition. Whether you need a minor fix or a complete overhaul of certain features, our skilled team is here to provide fast, efficient, and quality assistance. We cover a wide range of services, including plumbing, electrical work, painting, and more, all with the highest standards of safety and professionalism.",
      "Our team understands that even the smallest issues can disrupt your daily routine, so we prioritize promptness and attention to detail. With Ahmed Construction, you gain access to an experienced workforce that arrives fully equipped and prepared to tackle any task. From quick fixes like leaky faucets and broken fixtures to more extensive repairs, we take care of the essential details so you can focus on what matters most.",
      "Our Handyman Services extend beyond simple repairs. We also offer upgrades and installations to enhance the functionality and appeal of your property. Whether it’s mounting a television, assembling furniture, or installing new lighting, we handle each task with precision and respect for your space. Our goal is to provide services that not only resolve issues but also contribute to the overall quality of your home or business environment.",
      "At Ahmed Construction, we value transparency and reliability. We offer upfront pricing and detailed estimates to ensure you know exactly what to expect before any work begins. Our dedicated team is always ready to answer your questions and make recommendations based on your needs. Every task is approached with professionalism and commitment to delivering results that last.",
      "In addition to individual services, we also offer comprehensive maintenance packages to keep your property in top shape year-round. With regularly scheduled inspections and proactive maintenance, we help prevent minor issues from turning into costly repairs. Our team keeps track of essential upkeep needs, so you don’t have to worry about unexpected breakdowns.",
      "From routine maintenance to emergency repairs, Ahmed Construction’s Handyman Services are designed to offer peace of mind and dependable support. Our skilled professionals are dedicated to ensuring that every aspect of your property functions smoothly and looks its best. Trust us for quality work, convenience, and service that truly cares for your property.",
    ],
    images: [
      { src: ServicesTabs09, alt: "Services Tabs" },
      { src: ServicesTabs10, alt: "Services Tabs" },
    ],
  },
];

function Accordion() {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabContents = document.querySelectorAll(".tab-content");

  for (const tabItemEl of tabItems) {
    tabItemEl.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        tabItemEl.classList.toggle("current-item");
      } else {
        tabItemEl.classList.add("current-item");
      }

      for (const tabContentEl of tabContents) {
        if (
          tabItemEl.classList.contains("current-item") &&
          tabItemEl.dataset.target === tabContentEl.dataset.target
        ) {
          for (const tabItemEl of tabItems) {
            tabItemEl.classList.remove("current-item");
          }
          tabItemEl.classList.add("current-item");

          for (const tabContentEl of tabContents) {
            tabContentEl.classList.remove("show-item");
          }
          tabContentEl.classList.toggle("show-item");
        } else if (window.innerWidth < 768) {
          tabContentEl.classList.remove("show-item");
        }
      }
    });
  }

  return (
    <div className="accordion">
      <div className="container">
        <ul className="tab-list">
          {data.map((item, index) => {
            const { id, target, listTitle } = item;
            return (
              <li
                className={`tab-item ${index === 0 ? "current-item" : ""}`}
                key={id}
                data-target={target}
              >
                {listTitle}
              </li>
            );
          })}
        </ul>

        <div className="accordion-items">
          {data.map((item, index) => {
            const { id, target, listTitle, title, contents, images } = item;

            return (
              <div key={id}>
                <div
                  className={`tab-item ${index === 0 ? "current-item" : ""}`}
                  data-target={target}
                >
                  {listTitle}
                </div>

                <div
                  className={`tab-content ${index === 0 ? "show-item" : ""}`}
                  data-target={target}
                >
                  <article className="tab-pane">
                    <h2 className="title-md">{title}</h2>

                    <p>{contents[0]}</p>
                    <p>{contents[1]}</p>

                    <img
                      src={images[0].src}
                      alt={images[0].alt}
                      className="tab-img"
                    />

                    <p>{contents[2]}</p>
                    <p>{contents[3]}</p>

                    <img
                      src={images[1].src}
                      alt={images[1].alt}
                      className="tab-img"
                    />

                    <p>{contents[4]}</p>
                    <p>{contents[5]}</p>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
