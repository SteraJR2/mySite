import "./App.css";
import PicWithNavBar from "./components/PicWithNavBar.jsx";
import ContactMeTab from "./components/ContactMeTab.jsx";
import ProjectsTab from "./components/ProjectsTab.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PicWithNavBar />}></Route>
          <Route path="/contact" element={<ContactMeTab />}></Route>
          <Route path="/projects" element={<ProjectsTab />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
