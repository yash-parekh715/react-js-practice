import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-3 py-1 rounded-full text-white shadow-lg flex justify-center"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
