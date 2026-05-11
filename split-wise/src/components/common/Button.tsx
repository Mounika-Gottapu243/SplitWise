interface ButtonProps{
    label : string;
    onClick ?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";

}



function Button({ label, onClick, type = "button", variant = "primary" }: ButtonProps) {
  return (
    <button
    type={type}
    onClick={onClick}
    className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition-colors duration-200
        ${variant === "primary" ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 hover:bg-gray-500"}
      `}
    >
      {label}
    </button>
  );
}

export default Button;