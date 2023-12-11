import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
//import the pages and components
import Home from "./pages/Home"; 
import Projects from "./pages/Projects";
import Learningjourney from "./pages/Learningjourney";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> //define the route to different pages
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/Learningjourney" element={<Learningjourney/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
