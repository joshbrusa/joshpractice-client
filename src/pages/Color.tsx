import { useEffect, useState } from "react";

export default function Color() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [redGuess, setRedGuess] = useState("");

  useEffect(() => {
    function getRGB() {
      return Math.floor(Math.random() * 256) + 1;
    }

    setRed(getRGB());
    setGreen(getRGB());
    setBlue(getRGB());
  }, []);

  const rgb = `rgb(${red},${green},${blue})`;
  const style = {
    backgroundColor: rgb,
  };

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h1 className="p-2 text-xl">Color Guesser</h1>
        <p className="p-2">
          Input the correct RGB color code to score a point!
        </p>
        <div style={style} className="m-2 w-80 h-80"></div>
        <div className="p-2 flex">
          <input
            type="number"
            placeholder="R"
            onChange={(e) => setRedGuess(e.target.value)}
            value={redGuess}
            className="w-20 text-center"
          />
          <input type="number" placeholder="G" className="w-20 text-center" />
          <input type="number" placeholder="B" className="w-20 text-center" />
        </div>
      </div>
    </>
  );
}
