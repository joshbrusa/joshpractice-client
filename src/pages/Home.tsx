import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="p-2 text-2xl text-cyan-600">
        <Link to="/">Josh Practice</Link>
      </div>
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
        <Link target="_blank" to="https://github.com/joshbrusa/joshpractice">
          GitHub
        </Link>
      </div>
    </div>
  );
}
