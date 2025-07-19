import { useRef, useState } from "react";
const InputBox = ({ isLoading, onChange, onInput, input }) => {
  const inputRef = useRef(null);
  const inputFile = useRef(null);

  const handleClick = (e) => {
    // Prevent focusing input when clicking on the "Add Document" button
    if (e.target.closest(".no-focus")) return;

    inputRef.current?.focus();
  };
  const handleFile = () => {
    inputFile.current?.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("file is added");
  };

  console.log(input);
  return (
    <div className="main_container mx-auto">
      <div
        className="bg-black h-32 p-5 fixed bottom-3 left-0 right-0 w-8/12 mx-auto rounded-3xl flex flex-col"
        onClick={handleClick}
      >
        <div className="flex item-center ">
          <textarea
            value={input}
            ref={inputRef}
            placeholder="Enter your Legal Questions"
            rows={2}
            className="w-full px-2  bg-transparent focus:outline-none caret-white text-white"
            onChange={onInput}
          />
          <button className="no-focus">Submit</button>
        </div>
        <div className="flex justify-between">
          {" "}
          <button onClick={handleFile} className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <input
              ref={inputFile}
              type="file"
              className="hidden"
              onChange={handleFileChange}
            ></input>
          </button>
          <button
            disabled={!input.trim()}
            className={`${
              !input.trim() ? "bg-gray-400 text-black" : ""
            } bg-white p-2 rounded-xl px-5 font-semibold`}
            onClick={onChange}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default InputBox;
