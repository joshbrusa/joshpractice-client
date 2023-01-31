export default function Color() {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h1 className="p-2 text-xl">Color Guesser</h1>
        <p className="p-2">
          Input the correct RGB color code to score a point!
        </p>
        <div className="m-2 w-80 h-80 bg-black"></div>
        <div className="p-2 flex">
          <input type="number" placeholder="R" className="w-20 text-center" />
          <input type="number" placeholder="G" className="w-20 text-center" />
          <input type="number" placeholder="B" className="w-20 text-center" />
        </div>
      </div>
    </>
  );
}
