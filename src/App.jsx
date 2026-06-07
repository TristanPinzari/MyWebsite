import { useState, useEffect, useRef } from "react";
import * as images from "./assets";

import HackerText from "./components/HackerText";
import ImageSlider from "./components/ImageSlider";
import ContactForm from "./components/ContactForm";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import ProjectCard from "./components/ProjectCard";

function App() {
  const homeRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const [isMounted, setIsMounted] = useState(false);
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
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
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

    setIsMounted(true);

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
          onClick={() => scrollTo("contactHeader")}
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
              Hello, my name is Tristan Pinzari, and I am a second-year computer
              science student at Western University and a full-stack developer.
              I enjoy making all sorts of applications, from practical tools to
              games. Additionally, I also enjoy learning new programming
              languages, frameworks, and other development tools.
              <br />
              <br />
              What is my goal? Well, the job market for software engineers
              becomes grimmer by the day. However, even the most enthusiastic
              enthusiasts of AI enthusiasts acknowledge that, in a couple of
              years, there will still be a small number of human software
              engineers—the jacks of all trades, masters of all. My goal is to
              be one of them.
            </p>
          </div>
          <div className="fadeIn">
            <div
              className={`sliderWrapper ${isMounted ? "startAnim" : ""}`}
              id="sliderWrapper1"
            >
              <img className="sliderItem" src={images.party} />
              <img className="sliderItem" src={images.suits} />
              <img className="sliderItem" src={images.christmas} />
              <img className="sliderItem" src={images.shopping} />
              <img className="sliderItem" src={images.viking} />
            </div>
            <div
              className={`sliderWrapper ${isMounted ? "startAnim" : ""}`}
              id="sliderWrapper2"
            >
              <img className="sliderItem" src={images.party} />
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
                  backgroundImage: `url(${images.flip}), url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E"), radial-gradient(ellipse 280px 220px at 15% 20%, rgba(100, 50, 210, 0.12), transparent 70%), radial-gradient(ellipse 240px 200px at 85% 75%, rgba(20, 150, 190, 0.1), transparent 70%), radial-gradient(ellipse 200px 180px at 72% 18%, rgba(180, 35, 110, 0.09), transparent 70%), radial-gradient(ellipse 220px 200px at 8% 82%, rgba(10, 170, 130, 0.09), transparent 70%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                  backgroundColor: "rgb(13, 13, 17)",
                  backgroundSize:
                    "70%, 180px 180px, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 60px 60px, 60px 60px",
                  backgroundRepeat:
                    "no-repeat, repeat, no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat",
                  backgroundPosition:
                    "center, 0 0, 0 0, 0 0, 0 0, 0 0, center, center",
                }}
              />
              <div>
                <div>
                  <p className="smallHeader centerText cardHeader">
                    SOFTWARE ENGINEER
                  </p>
                </div>
                <p>
                  In the summer of 2026, I was a software engineer at FlipPilot,
                  a SaaS startup automating deal-searching across marketplaces
                  and retail stores. I engineered features to dynamically expand
                  supported platforms, built robust workarounds to bypass
                  bot-protected sites, and delivered critical platform-wide
                  polish, ultimately shipping all of these core changes directly
                  to the{" "}
                  <a href="https://www.flippilot.ca/" target="blank">
                    production site
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
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
                    SOFTWARE ENGINEER INTERN
                  </p>
                </div>
                <p>
                  In the summer of 2023, I worked at Headstarter as the lead
                  developer of a three-person team. I led the team to
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
        </div>
      </section>
      <section id="projects">
        <p id="projectsHeader" className="sectionHeader fadeIn centerText">
          PROJECTS
        </p>
        <div id="projectsWrapper" onMouseMove={HandleMouseMove}>
          <ProjectCard
            title="NOTIFY"
            description={
              <p>
                Notify was born out of a specific frustration: history lectures
                where information flies by and materials aren't posted online,
                leaving students stranded if they miss a single point. Built
                with React, Node.js, and Firebase, the app is designed to bridge
                these gaps without assuming students have access to expensive
                textbooks or external resources. Its core strength is
                localization; using a simple course code system, Notify creates
                a private space for actual classmates to very easily group up
                without directly interacting. Unlike massive note-sharing
                databases that are often cluttered with irrelevant documents
                from different schools, Notify ensures the only content you see
                is directly tied to the specific lecture you just attended.
                <br />
                <br />
                To ensure reliability, Notify allows a classroom to pool their
                collective notes into a single collection. Using Gemini AI, the
                app can then synthesize these into a "master document," ensuring
                that as long as the class as a whole captured the information,
                the final document is complete. Critically, all AI features are
                entirely optional to protect academic integrity. Students can
                choose to toggle off fact-checking or grammar fixes, leaving the
                app as a purely organizational tool that simply sorts and
                compiles peer notes. This flexibility allows Notify to function
                either as an advanced AI study assistant or as a traditional,
                student-led collaboration hub, depending on the specific needs
                of the class.
                <br />
                <br />
                Notify is a very practical solution to a very real problem, and
                during the Canadian Tech Summit of 2026, many students testified
                that they would use it if it were to come into production.
                Currently Notify, while it does work, serves as a proof of
                concept, and in the future I plan to assemble a team to make the
                production version with significant improvements and more
                functionality and features.
                <br />
                <br />
                Built with React, Node, and Firebase.
              </p>
            }
            images={[
              images.notify2,
              images.notify1,
              images.notify3,
              images.notify4,
            ]}
            id="imageSlider1"
          />
          <ProjectCard
            title="ZEN REVIEW"
            description={
              <p>
                This is a desktop application for managing pull requests built
                on the GitHub API, designed to help senior engineers triage and
                work through large volumes of PRs efficiently. I built two core
                parts of the application: the settings module, which handles
                GitHub PAT authentication and user configuration, and the review
                management system, which lets users assign custom statuses,
                priorities, and notes to pull requests to maintain context
                across repositories and sessions.
                <br />
                <br />
                Built with Electron, Next.js, TypeScript, and SQLite. First
                created and owned by Dalton McPhaden.
              </p>
            }
            images={[images.zen1, images.zen2, images.zen3]}
            id="imageSlider9"
          />
          <ProjectCard
            title="CHATTERBOX"
            description={
              <p>
                This project is a high-performance Twitter clone built using
                Elixir and the Phoenix framework, designed to leverage
                functional programming for real-time scalability. The
                application features a relational architecture powered by
                PostgreSQL, supporting core social dynamics such as a
                comprehensive followers system and personalized user feeds. To
                handle media at scale, I integrated AWS S3 for cloud-based file
                storage, ensuring that user uploads are managed efficiently
                outside of the primary database.
                <br />
                <br />
                One of the most rewarding challenges of this project was
                engineering a custom authentication system from the ground up.
                By moving away from third-party services like Firebase, I
                developed a more robust and cost-effective solution that handles
                cookie and token management, as well as automated workflows for
                account activation and password resets powered by Mailjet. This
                project serves as a strong demonstration of my ability to build
                secure, full-stack ecosystems while maintaining complete control
                over the underlying security and communication infrastructure.
                <br />
                <br />
                Built with Elixir, Phoenix, Tailwind CSS, PostgreSQL, AWS S3,
                and Mailjet
              </p>
            }
            images={[images.twitter1, images.twitter2, images.twitter3]}
            id="imageSlider8"
          />
          <ProjectCard
            title="TYPERACER"
            description={
              <p>
                As a computer science student, I periodically play Typeracer to
                improve my typing speed and for fun. However, instead of just
                playing it, I decided to build my own replica of the popular
                website to better understand its underlying architecture. The
                result is a web application that captures all of Typeracer's
                main mechanics, including global races, self-practice, and
                private lobbies. While maintaining the original's iconic style,
                my version introduces significant structural improvements. For
                instance, the original site utilizes legacy HTML tables for its
                layout, which complicates rerendering and maintenance. My
                replica refactors this into a modular React architecture, using
                simple logic to achieve the same result with significantly less
                complexity and better performance.
                <br />
                <br />
                In practice, the application operates seamlessly as a full-stack
                solution. It was built using React, TypeScript, and Node and
                leverages Appwrite for database management, real-time WebSocket
                connections, and automated database cleaning. By integrating
                Appwrite’s backend service, I was able to manage live race
                states and user statistics with low latency. This project served
                as an excellent exercise in state management and real-time
                synchronization, allowing me to transform a common hobby into a
                robust piece of software that improves upon the technical
                foundations of the original.
                <br />
                <br />
                Built with React, TypeScript, Node, and Appwrite.
              </p>
            }
            images={[
              images.typeracer3,
              images.typeracer4,
              images.typeracer1,
              images.typeracer2,
            ]}
            id="imageSlider7"
          />
          <ProjectCard
            title="WEATHERWATCH"
            description={
              <p>
                This was my second project at Headstarter, created in response
                to the East Coast of the United States being engulfed in smoke
                due to Canadian wildfires. The goal of the project was to
                display real-time weather data, safety alerts, and relevant news
                for any selected city.
                <br />
                <br />
                The application was built using HTML, CSS, JavaScript,
                OpenWeather, and NewsAPI, and it significantly strengthened my
                frontend development skills, data interpretation, and overall
                experience working with APIs. Out of all the weather aggregators
                presented, our project received the “Best Demo” award at
                Headstarter—an especially rewarding milestone for a team of
                beginners.
                <br />
                <br />
                Built with HTML, CSS, JavaScript, OpenWeather, and NewsAPI.
              </p>
            }
            images={[images.weather1, images.weather2]}
            id="imageSlider2"
          />
          <ProjectCard
            title="RESUME PARSER"
            description={
              <p>
                This project was a resume parser that allowed users to upload
                resumes and search through them using keywords to identify the
                best candidates. It was my very first project at Headstarter and
                my first real experience working as a full-stack developer,
                which exposed me to HTML, CSS, JavaScript, and Firebase all at
                once. Although it was technically the simplest project I’ve
                worked on, it proved to be the most challenging because I had to
                learn these technologies, manage databases, and lead a team of
                developers—all within a strict one-week deadline.
                <br />
                <br />
                It’s especially memorable to me because of the all-nighters I
                pulled to get everything perfect, as well as the genuine
                excitement of completing my first fully operational project. I
                learned more in that one week about rapid development and
                leadership than almost any other project since.
                <br />
                <br />
                Built with HTML, CSS, JavaScript, and Firebase.
              </p>
            }
            images={[images.resume3, images.resume1, images.resume2]}
            id="imageSlider3"
          />
          <ProjectCard
            title="THE CITY REVIVAL"
            description={
              <p>
                For a summer of high school, I was invited to be the head
                developer for a community game called "The City Revival" on
                Roblox. While people sometimes overlook Roblox, the Studio
                served as an incredible introduction to programming in 3D
                environments, where I had to apply physics, calculus, and
                vectors to every system.
                <br />
                <br />I moved beyond just UI and graphics to building complex
                systems and physics entities such as vehicles, firearms, custom
                animations, gamemodes, an economy, and much much more. Because
                the game grew to include thousands of scripts and hundreds of
                thousands of assets, it was also my greatest teacher of modular
                programming; I had to keep everything strictly organized to
                ensure the game stayed efficient for our player base. Overall,
                it helped me become very comfortable with working in 3D
                environments.
                <br />
                <br />
                The project was a huge success, hosting large-scale events with
                hundreds of active players, and I’m glad to say the game is
                still beloved and operational today.
                <br />
                <br />
                Built with Lua and Roblox Engine.
              </p>
            }
            images={[images.city1, images.city2, images.city3, images.city4]}
            id="imageSlider4"
          />
          <ProjectCard
            title="BOHNANZA"
            description="This project was a recreation of Bohnanza, a German-style card
                  game centered on trading, negotiation, and strategic
                  decision-making. It was designed to closely simulate the
                  physical card game through interactive features such as
                  visible decks of draggable cards that can be planted or
                  discarded depending on where the player drops them. The game
                  includes a realistic turn-taking and deck management system,
                  along with a comprehensive AI opponent that makes decisions
                  based on the player’s hand, its hand, and the remaining cards
                  left. The project was made with Java and Java Swing and was a
                  real test for my object-oriented programming skills."
            images={[images.boh1, images.boh2, images.boh3]}
            id="imageSlider5"
          />
          <ProjectCard
            title="PAC-MAN"
            description="This was a high school assignment where we had to recreate
                  Pac-Man using Java and Java Swing. My design incorporated a list of features, such as custom
                  power-ups, player map building, custom themes, etc. The key
                  feature that separated my design from my peers was my
                  pathfinding algorithm, which made the game incredibly
                  difficult as you progressed through levels."
            images={[images.pacman1, images.pacman2, images.pacman3]}
            id="imageSlider6"
          />
        </div>
      </section>
      <section id="contact">
        <p id="contactHeader" className="sectionHeader fadeIn centerText">
          CONTACT
        </p>
        <ContactForm />
        <div className="fadeIn">
          <FaGithubSquare
            onClick={() =>
              window.open("https://github.com/TristanPinzari", "_blank")
            }
          />
          <FaLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/tristan-pinzari-7aa10b2b4/",
                "_blank",
              )
            }
          />
          <MdOutlineAlternateEmail
            onClick={() =>
              window.open("mailto:tristanpinzari@gmail.com", "_self")
            }
          />
        </div>
      </section>
    </>
  );
}

export default App;
