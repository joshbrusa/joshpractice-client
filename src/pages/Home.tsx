import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <Link className="p-2 text-2xl text-cyan-600" to="/">
        Practice
      </Link>
      <Link className="home-button" to="/color">
        Color Quiz
      </Link>
      <Link className="home-button" to="/addition">
        Addition Quiz
      </Link>
      <Link className="home-button" to="/subtraction">
        Subtraction Quiz
      </Link>
      <Link className="home-button" to="/multiplication">
        Multiplication Quiz
      </Link>
      <Link className="home-button" to="/division">
        Division Quiz
      </Link>
      <Link
        className="home-button"
        target="_blank"
        to="https://github.com/joshbrusa/practice"
      >
        GitHub
      </Link>
    </div>
  );
}
