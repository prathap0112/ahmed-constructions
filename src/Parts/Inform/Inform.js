// Css
import "./Inform.css";

// Fake Server
const data = [
  {
    id: 1,
    icon: "icon-travel",
    number: "24",
    title: "planning applications",
  },

  {
    id: 2,
    icon: "icon-building",
    number: "5",
    title: "completed projects",
  },

  {
    id: 3,
    icon: "icon-users",
    number: "55",
    title: "trained professional",
  },

  {
    id: 4,
    icon: "icon-globe",
    number: "1",
    title: "number of office",
  },
];

function Inform() {
  const informNums = document.querySelectorAll(".card-number");

  for (const informNumEl of informNums) {
    informNumEl.textContent = "0";

    const counter = (endNum, numPlus, interval, index) => {
      let number = 0;

      const setNumber = setInterval(() => {
        number += numPlus;

        if (number >= endNum) {
          number = endNum;
          clearInterval(setNumber);
        }

        informNums[index].textContent = number;
      }, interval);
    };

    window.addEventListener("scroll", () => {
      if (
        informNumEl.getBoundingClientRect().bottom <= window.innerHeight &&
        informNumEl.textContent === "0"
      ) {
        // Update the values here
        counter(24, 1, 100, 0); // Planning applications
        counter(5, 1, 100, 1); // Completed projects
        counter(55, 1, 50, 2); // Trained professionals
        counter(1, 1, 200, 3); // Number of offices
      }
    });
  }

  return (
    <div className="inform parent-semicircular">
      {/* semicircular */}
      <div className="semicircular"></div>

      <div className="container">
        <div className="parent-items">
          {data.map((item) => {
            const { id, icon, number, title } = item;

            return (
              <section key={id} className="counter-card">
                <i className={`card-icon ${icon}`}></i>
                <h4 className="card-number">{number}</h4>
                <h3 className="title-sm">{title}</h3>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Inform;
