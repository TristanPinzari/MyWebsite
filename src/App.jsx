import { useState, useEffect } from "react";
import * as images from "./assets";

import HackerText from "./components/HackerText";
import ImageSlider from "./components/ImageSlider";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    function updateActiveSection() {
      let maxVisible = 0;
      let mostVisibleId = activeSection;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visiblePixels = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        );
        if (visiblePixels > maxVisible) {
          maxVisible = visiblePixels;
          mostVisibleId = section.id;
        }
      }
      setActiveSection(mostVisibleId);
    }
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    const navBar = document.getElementById("navBar");
    function navScroll() {
      navBar.dataset.scrolled = window.scrollY / window.innerHeight > 0.05;
    }
    window.addEventListener("scroll", navScroll);

    for (const element of document.getElementsByClassName("sliderWrapper")) {
      element.classList.add("startAnim");
    }

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("scroll", navScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function HandleMouseMove(e) {
    for (const element of e.currentTarget.children) {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      element.style.setProperty("--mouse-x", `${x}px`);
      element.style.setProperty("--mouse-y", `${y}px`);
    }
  }

  function scrollTo(id) {
    const element = document.getElementById(id);
    window.scrollTo({
      top: id == "home" ? 0 : element.offsetTop - 100,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div id="navBar">
        <button
          className={activeSection === "home" ? "active" : ""}
          onClick={() => scrollTo("home")}
        >
          HOME
        </button>
        <button
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollTo("aboutHeader")}
        >
          ABOUT
        </button>
        <button
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => scrollTo("projectsHeader")}
        >
          PROJECTS
        </button>
        <button
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => scrollTo("contact")}
        >
          CONTACT
        </button>
      </div>
      <section id="home">
        <div>
          <HackerText className={"highlight"} textContent={"TRISTAN"} />
          <HackerText className={"highlight"} textContent={"PINZARI"} />
          <div className="film" />
          <div />
        </div>
      </section>
      <section id="about">
        <div>
          <div>
            <p id="aboutHeader" className="sectionHeader fadeIn">
              ABOUT
            </p>
            <p className="fadeIn centerText">
              Hello, my name is Tristan Pinzari, and I am a full-stack
              developer. I have experience with a wide range of languages and
              tools, including React, Node, Git, Firebase, Appwrite, Gemini,
              HTML, JavaScript, CSS, Java, and Python. I’m deeply interested in
              problem-solving through code, mathematics, and physics. I’m a fast
              learner who thrives on new challenges and is always eager to grow!
              <br />
              <br />I am currently in my first year of undergraduate studies at
              Western University, majoring in Computer Science. I am pursuing an
              Honours Specialization in Computer Science and plan to complete a
              minor in Software Engineering.
            </p>
          </div>
          <div className="fadeIn">
            <div className="sliderWrapper" id="sliderWrapper1">
              <img className="sliderItem" src={images.party} />
              <img className="sliderItem" src={images.crazyParty} />
              <img className="sliderItem" src={images.suits} />
              <img className="sliderItem" src={images.christmas} />
              <img className="sliderItem" src={images.shopping} />
              <img className="sliderItem" src={images.viking} />
            </div>
            <div className="sliderWrapper" id="sliderWrapper2">
              <img className="sliderItem" src={images.party} />
              <img className="sliderItem" src={images.crazyParty} />
              <img className="sliderItem" src={images.suits} />
              <img className="sliderItem" src={images.christmas} />
              <img className="sliderItem" src={images.shopping} />
              <img className="sliderItem" src={images.viking} />
            </div>
          </div>
        </div>
        <p className="centerText fadeIn">Here are some of my highlights:</p>
        <div id="highlights" onMouseMove={HandleMouseMove}>
          <div className="card fadeIn">
            <div>
              <div
                style={{
                  backgroundImage: `url(${images.headstarter})`,
                  backgroundColor: "rgb(5, 8, 18)",
                  backgroundSize: "125%",
                }}
              />
              <div>
                <div>
                  <p className="smallHeader centerText cardHeader">
                    SOFTWARE ENGINEERING FELLOW
                  </p>
                </div>
                <p>
                  In the summer of 2023, I worked at Headstarter as the Head
                  Developer in a three-person team. I led the team to
                  successfully complete all three full-stack projects we were
                  assigned, demonstrating strong team leadership, adaptability,
                  and resilience by quickly learning new tools and languages and
                  consistently delivering high-quality work under tight
                  deadlines, even as a beginner.
                </p>
              </div>
            </div>
          </div>
          <div className="card fadeIn">
            <div>
              <div
                style={{
                  backgroundImage: `url(${images.cloud9})`,
                  backgroundSize: "80%",
                  boxSizing: "border-box",
                  border: "15px #085585ff solid",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                }}
              />
              <div>
                <div>
                  <p className="smallHeader centerText cardHeader">
                    JUNIOR IT TECHNICIAN
                  </p>
                </div>
                <p>
                  In 11th grade, I completed my co-op term at Cloud9, an IT
                  company, and was later hired as a Junior IT Technician. During
                  my two years there, I worked with a variety of clients across
                  Ontario, gaining hands-on experience in tasks such as network
                  infrastructure planning, cabling and wiring, antenna
                  installations, and other technical projects, which
                  strengthened my technical and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
          <div className="card fadeIn">
            <div>
              <div
                style={{
                  backgroundImage: `url(${images.yrhacks})`,
                  backgroundColor: "rgb(6, 4, 41)",
                  backgroundSize: "40%",
                }}
              />
              <div>
                <div>
                  <p className="smallHeader centerText cardHeader">
                    LOGISTICS & OUTREACH EXECUTIVE
                  </p>
                </div>
                <p>
                  I served on the executive team for YRHacks, Canada’s largest
                  hackathon organization exclusively for high school students.
                  In 2024, I contributed to logistics, ensuring smooth event
                  coordination, and in 2025, I led outreach efforts, securing
                  sponsorships and fostering community engagement. My work
                  helped support the overall quality, organization, and success
                  of both events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <p id="projectsHeader" className="sectionHeader fadeIn centerText">
          PROJECTS
        </p>
        <div id="projectsWrapper" onMouseMove={HandleMouseMove}>
          <div className="card">
            <div className="cardContent">
              <div>
                <p className="smallHeader centerText cardHeader">
                  RESUME PARSER
                </p>
                <p>
                  This project was a resume parser that allowed users to upload
                  resumes and search through all uploaded resumes using keywords
                  to identify candidates. It was also my first project at
                  Headstarter and my first experience working as a full-stack
                  developer, exposing me to HTML, CSS, JavaScript, and Firebase
                  for the first time. Although it was technically the simplest
                  project I have worked on, it proved to be the most
                  challenging, as I had to quickly learn these technologies,
                  work with databases, and lead other developers—all within a
                  one-week deadline. It is especially memorable because of all
                  the all-nighters I pulled, as well as the excitement of
                  completing my first fully operational project.
                </p>
              </div>
              <div>
                <ImageSlider
                  id="imageSlider1"
                  images={[images.resume3, images.resume1, images.resume2]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact"></section>
    </>
  );
}

export default App;
