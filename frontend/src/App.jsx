import { BrowserRouter as Router, Routes } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
