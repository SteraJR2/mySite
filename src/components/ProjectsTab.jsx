import { Swiper, SwiperSlide } from "swiper/react";
import picture from "../assets/fototessera.jpg";
import StarryBackground from "./StarryBG";
import projectPic from "../assets/Proj1.png";
import projectPic2 from "../assets/Proj2.png";
import projectPic21 from "../assets/1.png";
import projectPic22 from "../assets/2.png";
import projectPic23 from "../assets/3.png";
import projectPic24 from "../assets/4.png";
import projectPic25 from "../assets/5.png";

import { Link } from "react-router-dom";
import "swiper/css";
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
        <h2 className="myNameDark">Junior Full-Stack Web Developer</h2>
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
            JS which operates with CRUD operations and displays it when
            clicking a button, the user also has the option to click on the game
            to display the properties in another page. (Loading will be slow due
            to it being hosted on a free server.)
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
      <div className="projectDiv">
        <div style={{ width: 600, height: 300 }}>
          <Swiper
            className="carouselImages"
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                className="carouselImages"
                src={projectPic2}
                alt="Project 2"
                style={{
                  width: 600,
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="carouselImages"
                src={projectPic21}
                alt="Project 2-1"
                style={{
                  width: 600,
                  height: 300,
                  objectFit: "contain",
                  borderRadius: 10,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="carouselImages"
                src={projectPic22}
                alt="Project 2-2"
                style={{
                  width: 600,
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="carouselImages"
                src={projectPic23}
                alt="Project 2-3"
                style={{
                  width: 600,
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="carouselImages"
                src={projectPic24}
                alt="Project 2-4"
                style={{
                  width: 600,
                  height: 300,
                  objectFit: "contain",
                  borderRadius: 10,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="carouselImages"
                src={projectPic25}
                alt="Project 2-5"
                style={{
                  width: 600,
                  height: 300,
                  objectFit: "contain",
                  borderRadius: 10,
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="projectText">
          <h2 style={{ marginLeft: 20, marginTop: 5 }}>
            Project 2: A bundle of mini projects
          </h2>
          <p style={{ marginLeft: 20 }}>
            I made this to encapsulate all the little projects I've built while
            learning React+Vite. The functionalities are pretty simple and the
            most elaborated project is the weather app.
          </p>
          <div className="buttonsDiv">
            <button className="projBtn">
              <a
                href="https://github.com/SteraJR2/Mini-Projects"
                target="_blank"
                style={{ color: "#f5fdf7", textDecoration: "none" }}
              >
                GitHub Repo
              </a>
            </button>
            <button className="projBtn">
              <a
                href="https://miniprojectsforlearning.netlify.app/"
                target="_blank"
                style={{ color: "#f5fdf7", textDecoration: "none" }}
              >
                Demo
              </a>
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2026 Andrea Taccone. All rights reserved.</p>
      </footer>
    </>
  );
};

export default ProjectsTab;
