import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/nav.tsx";

import Home from "./components/Home/home";

function App() {
  return (
    <Router basename="/Web-Page-Recreation-1">
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
