interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition-colors duration-200
        ${
          variant === "primary"
            ? "bg-[#0f3f4a] hover:bg-[#0b3038]"
            : "bg-[#0f766e] hover:bg-[#115e59]"
        }
      `}
    >
      {label}
    </button>
  );
}

export default Button;
