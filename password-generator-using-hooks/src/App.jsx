import { useState, useCallback, useEffect, useRef } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*(){}~\"'<>+-`:;/?=[]|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  // const copyPasswordToClipboard = useCallback(() => {
  //   passwordRef.current?.select();
  //   window.navigator.clipboard.writeText(password);
  //   console.log(password, Math.random());
  // }, [password]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    let copy = document.getElementsByTagName("button");
    copy.innerHTML = "copied";
  };

  // const passwordRef = useRef(null);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center text-xl my-3">
          Password Generator
        </h1>
        <div className="flex shadow-2xl rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            id="copyText"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            // ref={passwordRef}
          />
          <button
            className="text-white bg-blue-700 outline-none px-3 py-0.5 shrink"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />{" "}
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />{" "}
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
