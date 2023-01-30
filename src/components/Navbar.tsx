import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLInputElement>(null);

  return (
    <nav ref={menuRef}>
      <ul className="flex items-center justify-around">
        <li className="p-2 text-2xl text-cyan-600">
          <Link to="/">Josh Practice</Link>
        </li>
        <li className="p-2 text-xl">
          <Link to="/color">Color Guesser</Link>
        </li>
      </ul>
    </nav>
  );
}
