import React from "react";

interface MenuButtonProps {
  text?: string;
  icon?: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  title?: string;
}

export function MenuButton(props: MenuButtonProps) {
  const { text, icon, isActive, onClick, title } = props;

  const buttonClassName = `w-[80%] ${
    isActive ? "bg-cyan-100 text-cyan-600" : "bg-transparent text-black"
  } p-3 rounded-lg hover:bg-cyan-300 hover:text-cyan-800 transition duration-300 transform hover:scale-105 flex items-center ${
    text === "" ? "justify-center" : "justify-start gap-4"
  }`;

  return (
    <button className={buttonClassName} onClick={onClick} title={title}>
      {icon}
      <span>{text}</span>
    </button>
  );
}
