import { useEffect, useState } from "react";

export default function Addition() {
  function getNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function getCorrectIndex() {
    return Math.floor(Math.random() * 3);
  }

  function handleNumbers() {
    setNumbers([
      [getNumber(), getNumber()],
      [getNumber(), getNumber()],
      [getNumber(), getNumber()],
    ]);
  }

  function handleCorrectIndex() {
    setCorrectIndex(getCorrectIndex());
  }

  function handleSubmit(index: number) {
    if (
      numbers[correctIndex][0] + numbers[correctIndex][1] ==
      numbers[index][0] + numbers[index][1]
    ) {
      setCorrectScore(correctScore + 1);
      setTotalScore(totalScore + 1);
    } else {
      setTotalScore(totalScore + 1);
    }
    handleNumbers();
    handleCorrectIndex();
  }

  const [correctScore, setCorrectScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [numbers, setNumbers] = useState([
    [0, 0],
    [0, 0],
    [0, 0],
  ]);
  const [correctIndex, setCorrectIndex] = useState(0);

  useEffect(() => {
    handleNumbers();
    handleCorrectIndex();
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="p-2 text-xl">Addition Quiz</h1>
      <h2 className="p-2">{`${correctScore}/${totalScore}`}</h2>
      <p className="p-2 text-lg">{`${
        numbers[correctIndex][0] + numbers[correctIndex][1]
      }`}</p>
      <button
        onClick={() => handleSubmit(0)}
        className="p-2"
      >{`${numbers[0][0]} + ${numbers[0][1]}`}</button>
      <button
        onClick={() => handleSubmit(1)}
        className="p-2"
      >{`${numbers[1][0]} + ${numbers[1][1]}`}</button>
      <button
        onClick={() => handleSubmit(2)}
        className="p-2"
      >{`${numbers[2][0]} + ${numbers[2][1]}`}</button>
    </div>
  );
}
