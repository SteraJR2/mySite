import picture from "../assets/fototessera.jpg";
import { Link } from "react-router-dom";
import "../App.css";
const ContactMeTab = () => {
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
        <h2 className="myName">Junior Full-Stack Web Developer</h2>
        <Link to="/" className="navBarElements">
          Back
        </Link>
      </nav>
      <div className="mainContentContact">
        <section className="hero2">
          <p>I'm always open to discussing new opportunities!</p>
          <h3>
            Email:{" "}
            <a
              style={{ color: "#f5fdf7", marginLeft: "10px" }}
              href="mailto:sterajrthereal@gmail.com"
              target="_blank"
            >
              sterajrthereal@gmail.com
            </a>
          </h3>
          <h3>
            GitHub:{" "}
            <a
              style={{ color: "#f5fdf7", marginLeft: "10px" }}
              href="https://github.com/SteraJR2"
              target="_blank"
            >
              SteraJR2
            </a>
          </h3>
          <h3>
            LinkedIn:
            <a
              style={{ color: "#f5fdf7", marginLeft: "10px" }}
              href="https://www.linkedin.com/in/andrea-taccone-831614319/"
              target="_blank"
            >
              Andrea Taccone
            </a>
          </h3>
        </section>
        <footer className="footer">
          <p>&copy; 2026 Andrea Taccone. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default ContactMeTab;
