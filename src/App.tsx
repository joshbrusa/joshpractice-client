import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Color from "./pages/Color";
import Addition from "./pages/Addition";
import Subtraction from "./pages/Subtraction";
import Multiplication from "./pages/multiplication";
import Division from "./pages/Division";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/color"
            element={
              <>
                <Navbar />
                <Color />
              </>
            }
          />
          <Route
            path="/addition"
            element={
              <>
                <Navbar />
                <Addition />
              </>
            }
          />
          <Route
            path="/subtraction"
            element={
              <>
                <Navbar />
                <Subtraction />
              </>
            }
          />
          <Route
            path="/multiplication"
            element={
              <>
                <Navbar />
                <Multiplication />
              </>
            }
          />
          <Route
            path="/division"
            element={
              <>
                <Navbar />
                <Division />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
