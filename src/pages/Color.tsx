import { useEffect, useState } from "react";

export default function Color() {
  function getRGB() {
    return Math.floor(Math.random() * 255) + 1;
  }

  function getCorrectIndex() {
    return Math.floor(Math.random() * 3);
  }

  function handleRgb() {
    setRgb([
      [getRGB(), getRGB(), getRGB()],
      [getRGB(), getRGB(), getRGB()],
      [getRGB(), getRGB(), getRGB()],
    ]);
  }

  function handleCorrectIndex() {
    setCorrectIndex(getCorrectIndex());
  }

  function handleSubmit(index: number) {
    if (
      rgb[correctIndex][0] == rgb[index][0] &&
      rgb[correctIndex][1] == rgb[index][1] &&
      rgb[correctIndex][2] == rgb[index][2]
    ) {
      setCorrectScore(correctScore + 1);
      setTotalScore(totalScore + 1);
    } else {
      setTotalScore(totalScore + 1);
    }
    handleRgb();
    handleCorrectIndex();
  }

  const [correctScore, setCorrectScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [rgb, setRgb] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [correctIndex, setCorrectIndex] = useState(0);

  useEffect(() => {
    handleRgb();
    handleCorrectIndex();
  }, []);

  const backgroundColor = `rgb(${rgb[correctIndex][0]},${rgb[correctIndex][1]},${rgb[correctIndex][2]})`;
  const style = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="p-2 text-xl">Color Quiz</h1>
      <h2 className="p-2">{`${correctScore}/${totalScore}`}</h2>
      <div style={style} className="m-2 w-80 h-80 rounded-md"></div>
      <button
        onClick={() => handleSubmit(0)}
        className="button"
      >{`${rgb[0][0]}, ${rgb[0][1]}, ${rgb[0][2]}`}</button>
      <button
        onClick={() => handleSubmit(1)}
        className="button"
      >{`${rgb[1][0]}, ${rgb[1][1]}, ${rgb[1][2]}`}</button>
      <button
        onClick={() => handleSubmit(2)}
        className="button"
      >{`${rgb[2][0]}, ${rgb[2][1]}, ${rgb[2][2]}`}</button>
    </div>
  );
}
