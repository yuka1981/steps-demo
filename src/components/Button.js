const Button = ({ bgColor, color, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
