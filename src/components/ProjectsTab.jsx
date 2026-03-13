import picture from "../assets/fototessera.jpg";
import StarryBackground from "./StarryBG";
import projectPic from "../assets/Proj1.png";
import { Link } from "react-router-dom";
import "../Projects.css";
const ProjectsTab = () => {
  return (
    <>
      <StarryBackground />;
      <nav className="navBarDark">
        <img
          src={picture}
          alt="A picture of myself"
          width={100}
          height={120}
          className="myCardDark"
        />
        <h1 className="myNameDark">Andrea Taccone</h1>
        <Link to="/" className="navBarElements">
          Back
        </Link>
      </nav>
      <div className="projectDiv">
        <img
          src={projectPic}
          alt="Project 1"
          width={600}
          height={300}
          style={{ borderRadius: 10 }} 
        />
        <div className="projectText">
          <h2 style={{ marginLeft: 20, marginTop: 5 }}>
            Project 1: Steamlike site
          </h2>
          <p style={{ marginLeft: 20 }}>
            A simple page I made that fetches data from a JSON backend built in
            JS and displays it when clicking a button, the user also has the
            option to click on the game to display the properties in another
            page. (Loading will be slow due to it being hosted on a free
            server.)
          </p>
          <div className="buttonsDiv">
            <button className="projBtn">
              <a
                href="https://github.com/SteraJR2?tab=repositories"
                target="_blank"
                style={{ color: "#f5fdf7", textDecoration: "none" }}
              >
                GitHub Repos
              </a>
            </button>
            <button className="projBtn">
              <a
                href="https://statuesque-parfait-94ca0e.netlify.app/"
                target="_blank"
                style={{ color: "#f5fdf7", textDecoration: "none" }}
              >
                Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsTab;
