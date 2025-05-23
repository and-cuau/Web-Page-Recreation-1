import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Nav from "./components/Nav/nav.tsx";

import Home from "./components/Home/home";

function App() {
  useEffect(() => {
    const scroll = () => document.body.style.setProperty('--scroll', window.pageYOffset.toString());
		window.addEventListener('scroll', scroll, false);
		return () => window.removeEventListener('scroll', scroll);
    
  }, []); // empty dependency array = run once on mount


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
