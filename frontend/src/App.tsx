import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import TopBar from './components/TopBar';
import Footer from './components/Footer';

// These are placeholder components - you can create them similarly
const Academics = () => <div className="min-h-screen pt-20">Academics Page - Coming Soon</div>;
const StudentLife = () => <div className="min-h-screen pt-20">Student Life Page - Coming Soon</div>;
const Gallery = () => <div className="min-h-screen pt-20">Gallery Page - Coming Soon</div>;
const NewsEvents = () => <div className="min-h-screen pt-20">News & Events Page - Coming Soon</div>;

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/admissions/apply" element={<Admissions />} />
        <Route path="/admissions/fees" element={<Admissions />} />
        <Route path="/admissions/scholarships" element={<Admissions />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;