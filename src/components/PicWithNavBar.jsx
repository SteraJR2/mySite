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
        <h1 className="myName">Andrea Taccone</h1>
        <Link to="/contact" className="navBarElements">
          Contact Me
        </Link>
      </nav>
      <div className="mainContent">
        <section className="hero">
          <p>
            I am Andrea, a Junior Fullstack Web Developer, i mainly build
            responsive web apps with React and JS/TS.<br/><br/>
            I currently work at 3D Print srl in San Marino.
          </p>
          <Link to="/projects">
            <button className="heroButtons">Projects</button>
          </Link>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>Javascript/Typescript</li>
            <li>React</li>
            <li>Node</li>
            <li>MongoDB</li>
            <li>MySQL/SQL Server</li>
            <li>Python</li>
          </ul>
        </section>
      </div>

      <section className="otherSkills">
        <h2>Other Skills</h2>
        <ul>
          <li>Postman</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>VSCode</li>
          <li>Adobe Illustrator/Acrobat</li>
          <li>Office 365</li>
          <li>Team Collaboration</li>
        </ul>
      </section>
      <footer className="footer">
        <p>&copy; 2026 Andrea Taccone. All rights reserved.</p>
      </footer>
    </>
  );
};

export default PicWithNavBar;
