import { useState, useEffect, useRef } from "react";

import HackerText from "./components/HackerText";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const highlightsRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));

    const navBar = document.getElementById("navBar");
    function navScroll() {
      navBar.dataset.scrolled = window.scrollY / window.innerHeight > 0.05;
    }
    window.addEventListener("scroll", navScroll);

    for (const element of document.getElementsByClassName("sliderWrapper")) {
      element.classList.add("startAnim");
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", navScroll);
    };
  }, []);

  function HandleMouseMove(e) {
    for (const element of highlightsRef.current.children) {
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
      top: element.offsetTop,
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
          onClick={() => scrollTo("about")}
        >
          ABOUT
        </button>
        <button
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => scrollTo("projects")}
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
          <HackerText textContent={"TRISTAN"} />
          <HackerText textContent={"PINZARI"} />
          <div className="film" />
          <div />
        </div>
      </section>
      <section id="about">
        <div>
          <div>
            <p className="sectionHeader fadeIn">ABOUT</p>
            <p className="fadeIn centerText">
              Hello, my name is Tristan Pinzari, and I am a full-stack
              developer. I have experience with a wide range of languages and
              tools, including React, Node, Git, Firebase, Appwrite, Gemini,
              HTML, JavaScript, CSS, Java, and Python. I’m deeply interested in
              problem-solving through code, mathematics, and physics. I’m a fast
              learner who thrives on new challenges and is always eager to grow.
              Nonetheless, I am still your average energy-pumped undergrad!
            </p>
          </div>
          <div className="fadeIn">
            <div className="sliderWrapper" id="sliderWrapper1">
              <img className="sliderItem" src="src/assets/party.jpg" />
              <img className="sliderItem" src="src/assets/crazy_party.jpg" />
              <img className="sliderItem" src="src/assets/suits.jpg" />
              <img className="sliderItem" src="src/assets/christmas.jpg" />
              <img className="sliderItem" src="src/assets/shopping.jpg" />
              <img className="sliderItem" src="src/assets/viking.jpg" />
            </div>
            <div className="sliderWrapper" id="sliderWrapper2">
              <img className="sliderItem" src="src/assets/party.jpg" />
              <img className="sliderItem" src="src/assets/crazy_party.jpg" />
              <img className="sliderItem" src="src/assets/suits.jpg" />
              <img className="sliderItem" src="src/assets/christmas.jpg" />
              <img className="sliderItem" src="src/assets/shopping.jpg" />
              <img className="sliderItem" src="src/assets/viking.jpg" />
            </div>
          </div>
        </div>
        <p className="softHighlight centerText fadeIn">
          Here are some of my highlights:
        </p>
        <div ref={highlightsRef} id="highlights" onMouseMove={HandleMouseMove}>
          <div>
            <div>
              <div
                style={{
                  backgroundImage: `url('src/assets/headstarter.png')`,
                  backgroundColor: "rgb(5, 8, 18)",
                  backgroundSize: "125%",
                }}
              />
              <div>
                <div>
                  <p className="softHighlight smallHeader centerText">
                    SOFTWARE ENGINEERING FELLOW
                  </p>
                </div>
                <p>
                  In the summer of 2023, I worked at Headstarter as the Head
                  Developer in a three-person team. I led the team to
                  successfully complete all three full-stack projects we were
                  assigned, demonstrating adaptability and resilience by quickly
                  learning new technologies and delivering high-quality work
                  under tight deadlines, even as a beginner.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                style={{
                  backgroundImage: `url('src/assets/cloud9logo.png')`,
                  backgroundSize: "80%",
                  backgroundColor: "white",
                }}
              />
              <div>
                <div>
                  <p className="softHighlight smallHeader centerText">
                    JUNIOR IT TECHNICIAN
                  </p>
                </div>
                <p>
                  In 11th grade, I completed my co-op term at Cloud9, an IT
                  company, and was subsequently hired as a Junior IT Technician.
                  During my time there, I worked with a variety of clients
                  across Ontario, gaining hands-on experience in tasks such as
                  network infrastructure planning, cabling and wiring, antenna
                  installations, and other technical projects, which
                  strengthened both my technical and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                style={{
                  backgroundImage: `url('src/assets/yrhacks.png')`,
                  backgroundColor: "rgb(6, 4, 41)",
                  backgroundSize: "40%",
                }}
              />
              <div>
                <div>
                  <p className="softHighlight smallHeader centerText">
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
          <div>
            <div>
              <div
                style={{
                  backgroundImage: `url('src/assets/western.jpg')`,
                  backgroundColor: "rgb(79, 38, 131)",
                }}
              />
              <div>
                <div>
                  <p className="softHighlight smallHeader centerText">
                    FIRST-YEAR UNDERGRADUATE
                  </p>
                </div>
                <p>
                  I am currently a first-year undergraduate student at Western
                  University in London, Ontario, majoring in Computer Science. I
                  am pursuing an Honors Specialization in Computer Science with
                  a minor in Software Engineering, focusing on developing strong
                  software development skills while exploring artificial
                  intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects"></section>
      <section id="contact"></section>
    </>
  );
}

export default App;
