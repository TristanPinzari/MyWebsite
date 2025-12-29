import { useState, useEffect, useRef } from "react";
import * as images from "./assets";

import HackerText from "./components/HackerText";
import ImageSlider from "./components/ImageSlider";

function App() {
  const homeRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    if (homeRef.current) {
      if (
        navigator.platform === "iPad" ||
        navigator.platform === "iPhone" ||
        navigator.platform === "iPod"
      ) {
        homeRef.current.setAttribute("data-is-ios", true);
      } else {
        homeRef.current.setAttribute("data-is-ios", false);
      }
    }

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
      <section ref={homeRef} id="home">
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
                <p className="smallHeader centerText cardHeader">NOTIFY</p>
                <p>
                  This is my most recent project, built to help students
                  collaborate more effectively within their courses. I designed
                  it so users can create courses with unique join codes and
                  role-based permissions, similar to Google Classroom, where
                  they can organize shared notes by topic.
                  <br />
                  <br />
                  The core feature uses Gemini AI to analyze uploaded notes and
                  generate a single master document, with optional features such
                  as spell, grammar, and fact checks. I intentionally designed
                  the AI's influence to be scalable as to address concerns
                  around academic dishonesty; it produces results comparable to
                  what a student could create independently, just much more
                  easily and faster.
                  <br />
                  <br />
                  Targeted at university students, the platform is localized to
                  individual classes rather than acting as a large public
                  database, ensuring that students focus completely on course
                  content. This was my first project using React, Appwrite, and
                  FireAuth, and I’m excited to keep expanding this prototype.
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
          <div className="card">
            <div className="cardContent">
              <div>
                <p className="smallHeader centerText cardHeader">
                  WEATHER AGGREGATOR
                </p>
                <p>
                  This was my second project at Headstarter, created in response
                  to the East Coast of the United States being engulfed in smoke
                  due to Canadian wildfires. The goal of the project was to
                  display real-time weather data, safety alerts, and relevant
                  news for any selected city.
                  <br />
                  <br />
                  The application was built using HTML, CSS, JavaScript,
                  OpenWeather, and NewsAPI, and it significantly strengthened my
                  frontend development skills, data interpretation, and overall
                  experience working with APIs. Out of all the weather
                  aggregators presented, our project received the “Best Demo”
                  award at Headstarter—an especially rewarding milestone for a
                  team of beginners.
                </p>
              </div>
              <div>
                <ImageSlider
                  id="imageSlider2"
                  images={[images.resume3, images.resume1, images.resume2]}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardContent">
              <div>
                <p className="smallHeader centerText cardHeader">
                  RESUME PARSER
                </p>
                <p>
                  This project was a resume parser that allowed users to upload
                  resumes and search through them using keywords to identify the
                  best candidates. It was my very first project at Headstarter
                  and my first real experience working as a full-stack
                  developer, which exposed me to HTML, CSS, JavaScript, and
                  Firebase all at once. Although it was technically the simplest
                  project I’ve worked on, it proved to be the most challenging
                  because I had to learn these technologies, manage databases,
                  and lead a team of developers—all within a strict one-week
                  deadline.
                  <br />
                  <br />
                  It’s especially memorable to me because of the all-nighters I
                  pulled to get everything perfect, as well as the genuine
                  excitement of completing my first fully operational project. I
                  learned more in that one week about rapid development and
                  leadership than almost any other project since.
                </p>
              </div>
              <div>
                <ImageSlider
                  id="imageSlider3"
                  images={[images.resume3, images.resume1, images.resume2]}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardContent">
              <div>
                <p className="smallHeader centerText cardHeader">
                  The City Revival
                </p>
                <p>
                  For a summer of high school, I was invited to be the head
                  developer for a community game called "The City Revival" on
                  Roblox. While people sometimes overlook Roblox, the Studio
                  served as an incredible introduction to programming in 3D
                  environments, where I had to apply physics, calculus, and
                  vectors to every system.
                  <br />
                  <br />I moved beyond just UI and graphics to building complex
                  systems and physics entities such as vehicles, firearms,
                  custom animations, gamemodes, an economy, and much much more.
                  Because the game grew to include thousands of scripts and
                  hundreds of thousands of assets, it was also my greatest
                  teacher of modular programming; I had to keep everything
                  strictly organized to ensure the game stayed efficient for our
                  player base. Overall, it helped me become very comfortable
                  with working in 3D environments.
                  <br />
                  <br />
                  The project was a huge success, hosting large-scale events
                  with hundreds of active players, and I’m glad to say the game
                  is still beloved and operational today.
                </p>
              </div>
              <div>
                <ImageSlider
                  id="imageSlider4"
                  images={[
                    images.city1,
                    images.city2,
                    images.city3,
                    images.city4,
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardContent">
              <div>
                <p className="smallHeader centerText cardHeader">BOHNANZA</p>
                <p>
                  This project was a recreation of Bohnanza, a German-style card
                  game centered on trading, negotiation, and strategic
                  decision-making. It was designed to closely simulate the
                  physical card game through interactive features such as
                  visible decks of draggable cards that can be planted or
                  discarded depending on where the player drops them. The game
                  includes a realistic turn-taking and deck management system,
                  along with a comprehensive AI opponent that makes decisions
                  based on the player’s hand, its hand, and the remaining cards
                  left. The project was made with Java and Java Swing and was a
                  real test for my object-oriented programming skills.
                </p>
              </div>
              <div>
                <ImageSlider
                  id="imageSlider5"
                  images={[images.resume3, images.resume1, images.resume2]}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardContent">
              <div>
                <p className="smallHeader centerText cardHeader">PAC-MAN</p>
                <p>
                  This was a high school assignment where we had to recreate
                  Pac-Man using Java but with a list of additional features. My
                  design incorporated the full list of features, such as custom
                  power-ups, player map building, custom themes, etc. The key
                  feature that separated my design from my peers was my
                  pathfinding algorithm, which made the game incredibly
                  difficult as you progressed through levels.
                </p>
              </div>
              <div>
                <ImageSlider
                  id="imageSlider6"
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
