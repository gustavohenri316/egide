import { useState } from "react";

export function SwitchButton() {
  const [activeButton, setActiveButton] = useState(0);

  function handleButtonClick(index: number) {
    setActiveButton(index);
  }
  return (
    <div className="w-60 bg-white text-white flex gap-2 p-1 h-12 rounded-full mt-5">
      <button
        className={`${
          activeButton === 0 ? "bg-cyan-200" : "bg-white"
        } w-[50%] h-[100%] rounded-full text-cyan-800`}
        onClick={() => handleButtonClick(0)}
      >
        Investidor
      </button>
      <button
        className={`${
          activeButton === 1 ? "bg-cyan-200" : "bg-white"
        } w-[50%] rounded-full text-cyan-800`}
        onClick={() => handleButtonClick(1)}
      >
        Criador
      </button>
    </div>
  );
}
