import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick?: any;
  disabled?: boolean;
}

export function ArrowButton(props: ArrowButtonProps) {
  const { direction, onClick, disabled } = props;
  return (
    <button
      className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center"
      onClick={onClick}
      disabled={disabled}
    >
      {direction === "left" ? <BsChevronLeft /> : <BsChevronRight />}
    </button>
  );
}
