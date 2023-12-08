const Button = ({ label, iconURL }) => {
  return (
    <button
      className={`flex justify-center text-center items-center h-16 w-60 rounded-full text-main-1 text-Outfit text-xl p-8 font-semibold text-white border`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
