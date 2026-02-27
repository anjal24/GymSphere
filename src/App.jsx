import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";
import BookNow from "./BookNow";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Dynamic Route correctly setup */}
        <Route path="/services/:id" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Booknow" element={<BookNow />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
export default App;
