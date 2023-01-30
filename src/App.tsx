import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Color from "./pages/Color";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<Color />} />
        </Routes>
      </div>
    </div>
  );
}
