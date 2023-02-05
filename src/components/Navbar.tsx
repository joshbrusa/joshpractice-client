import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLInputElement>(null);

  if (typeof document !== "undefined") {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    });
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [window.location.pathname]);

  return (
    <nav ref={menuRef}>
      <div className="p-2 flex items-center justify-between">
        <div className="text-2xl text-cyan-600">
          <Link to="/">Josh Practice</Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="w-10 h-10">
          <Bars3Icon />
        </button>
      </div>

      <div className="flex justify-end">
        <div
          className={`absolute flex flex-col text-center justify-end bg-bg rounded-lg ${
            menuOpen ? null : "hidden"
          }`}
        >
          <div className="p-2 text-xl">
            <Link to="/color">Color Quiz</Link>
          </div>
          <div className="p-2 text-xl">
            <Link to="/addition">Addition Quiz</Link>
          </div>
          <div className="p-2 text-xl">
            <Link to="/subtraction">Subtraction Quiz</Link>
          </div>
          <div className="p-2 text-xl">
            <Link to="/multiplication">Multiplication Quiz</Link>
          </div>
          <div className="p-2 text-xl">
            <Link to="/division">Division Quiz</Link>
          </div>
          <div className="p-2 text-xl">
            <Link
              target="_blank"
              to="https://github.com/joshbrusa/joshpractice"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
