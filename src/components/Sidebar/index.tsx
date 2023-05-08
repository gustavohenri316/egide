import { useState } from "react";
import { MenuButton } from "../MenuButton";
import { FaHome, FaFirstOrder, FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

export function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };
  return (
    <aside
      className={` w-[350px] h-[100vh] bg-white text-dark shadow-lg shadow-gray-900 rounded-xl flex flex-col items-center ${
        isMenuOpen ? "w-[80px]" : ""
      }`}
    >
      <div
        className={` w-[100%] flex items-end ${
          !isMenuOpen ? "justify-end" : "justify-center"
        } p-4 cursor-pointer`}
      >
        {isMenuOpen ? (
          <FaBars
            size={20}
            onClick={handleToggleMenu}
            className="hover:text-cyan-600"
          />
        ) : (
          <BsXLg
            size={20}
            onClick={handleToggleMenu}
            className="hover:text-cyan-600"
          />
        )}
      </div>
      <div className="flex items-center gap-4 py-20">
        <FaFirstOrder size={40} color="#525252" />
        {!isMenuOpen && <h2 className="text-3xl">Égide Website</h2>}
      </div>
      <main className="w-[100%] flex flex-col justify-between h-[100%]">
        <section className="w-[100%] flex justify-center mt-12 flex-col items-center gap-4 ">
          <div className="w-[80%]">{!isMenuOpen && <span>Menu</span>}</div>
          <MenuButton
            title={isMenuOpen ? "Dashboard" : ""}
            text={`${!isMenuOpen ? "dashboard" : ""}`}
            icon={<FaHome />}
            isActive={activeButtonIndex === 0}
            onClick={() => handleButtonClick(0)}
          />
          <MenuButton
            title={isMenuOpen ? "Dashboard" : ""}
            text={`${!isMenuOpen ? "dashboard" : ""}`}
            icon={<FaHome />}
            isActive={activeButtonIndex === 1}
            onClick={() => handleButtonClick(1)}
          />
          <MenuButton
            title={isMenuOpen ? "Dashboard" : ""}
            text={`${!isMenuOpen ? "dashboard" : ""}`}
            icon={<FaHome />}
            isActive={activeButtonIndex === 2}
            onClick={() => handleButtonClick(2)}
          />
          <MenuButton
            title={isMenuOpen ? "Dashboard" : ""}
            text={`${!isMenuOpen ? "dashboard" : ""}`}
            icon={<FaHome />}
            isActive={activeButtonIndex === 3}
            onClick={() => handleButtonClick(3)}
          />
          <MenuButton
            title={isMenuOpen ? "Dashboard" : ""}
            text={`${!isMenuOpen ? "dashboard" : ""}`}
            icon={<FaHome />}
            isActive={activeButtonIndex === 4}
            onClick={() => handleButtonClick(4)}
          />
        </section>
        <section className="w-[100%] flex justify-center mt-12 flex-col items-center gap-4 mb-20">
          <div className="w-[80%]">{!isMenuOpen && <span>Account</span>}</div>
          <MenuButton
            title={isMenuOpen ? "Dashboard" : ""}
            text={`${!isMenuOpen ? "dashboard" : ""}`}
            icon={<FaHome />}
            isActive={activeButtonIndex === 5}
            onClick={() => handleButtonClick(5)}
          />
          <MenuButton
            title={isMenuOpen ? "Dashboard" : ""}
            text={`${!isMenuOpen ? "dashboard" : ""}`}
            icon={<FaHome />}
            isActive={activeButtonIndex === 6}
            onClick={() => handleButtonClick(6)}
          />
          <MenuButton
            title={isMenuOpen ? "Dashboard" : ""}
            text={`${!isMenuOpen ? "dashboard" : ""}`}
            icon={<FaHome />}
            isActive={activeButtonIndex === 7}
            onClick={() => handleButtonClick(7)}
          />
        </section>
      </main>
    </aside>
  );
}
