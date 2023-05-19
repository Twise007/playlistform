import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./pages/Navbar";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="text-black bg-primary h-screen p-1 md:p-4">
        <Navbar />
        <div className="md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
