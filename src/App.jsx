import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <div>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
