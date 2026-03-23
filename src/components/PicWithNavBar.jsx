import picture from "../assets/fototessera.jpg";
import { Link } from "react-router-dom";
const PicWithNavBar = () => {
  return (
    <>
      <nav className="navBar">
        <img
          src={picture}
          alt="A picture of myself"
          width={100}
          height={120}
          className="myCard"
        />
        <h1 className="myName">Andrea Taccone</h1>{" "}
        <h2 className="myName">Junior Full-Stack Web Developer</h2>
        <Link to="/contact" className="navBarElements">
          Contact Me
        </Link>
      </nav>
      <div className="mainContent">
        <section className="hero">
          <p>
            I am Andrea, a 22 year old Junior Fullstack Web Developer.
            <br /> I build responsive web applications using React, JavaScript,
            and TypeScript.
            <br />
            <br />
            Currently working at 3D Print SRL (San Marino).
          </p>
          <Link to="/projects">
            <button className="heroButtons">View Projects</button>
          </Link>
        </section>

        <section className="skills">
          <h2 className="headerForSections">Skills</h2>
          <ul>
            <li>
              <b>Frontend: </b>React, JavaScript/TypeScript
            </li>
            <br />
            <li>
              <b>Backend: </b>Node
            </li>
            <br />
            <li>
              <b>Databases: </b>MongoDB, MySQL/SQL Server
            </li>
            <br />
            <li>
              <b>Other: </b>Python
            </li>
          </ul>
        </section>
      </div>

      <section className="otherSkills">
        <h2 className="headerForSections">Tools</h2>
        <ul>
          <li>Postman</li>
          <br />
          <li>Git</li>
          <br />
          <li>GitHub</li>
          <br />
          <li>VS Code</li>
          <br />
          <li>Adobe Illustrator/Acrobat</li>
          <br />
          <li>Microsoft 365</li>
          <br />
          <li>Team Collaboration</li>
        </ul>
      </section>

      <section className="otherSkills">
        <h2 className="headerForSections">Education</h2>
        <ul>
          <li>
            High School Diploma in Languages (Spanish, English, French, Italian)
            - 2022
          </li>
          <br />
          <li>
            Bachelor’s Degree in Computer Science (ongoing) - 2025 - Present
            (Expected: 2028)
          </li>
        </ul>
      </section>

      <section className="otherSkills">
        <h2 className="headerForSections">Languages</h2>
        <ul>
          <li>
            Italian - <b>Native</b>
          </li>
          <br />
          <li>
            English - <b>C1</b>
          </li>
          <br />
          <li>
            Spanish - <b>B2</b>
          </li>
          <br />
          <li>
            French - <b>B1</b>
          </li>
        </ul>
      </section>
      <footer className="footer">
        <p>&copy; 2026 Andrea Taccone. All rights reserved.</p>
      </footer>
    </>
  );
};

export default PicWithNavBar;
