function Button({ children, onClick, textSize = "text-lg" }) {
  return (
    <div
      className={`ml-3 ${textSize} text-purple-100 font-bold bg-purple-950 px-2 rounded-full flex items-center justify-center`}
      onClick={onClick}
    >
      {children}
    </div>
    //test
  );
}

export default Button;
