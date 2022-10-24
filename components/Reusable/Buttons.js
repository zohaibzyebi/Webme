import React from "react";

const Button = ({ color = "bg-indigo-600 hover:bg-indigo-700", children, className }) => {
  return (
    <button
      className={`rounded-md shadow flex items-center justify-center px-8 py-3 border border-transparent text-sm md:text-base font-medium text-white my-5 md:py-3 md:px-6 ${color} ${className}`}
    >
      {children}
    </button>
  );
};


export const SocialButton = ({ Icon, ...props }) => {
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
      {...props}
    >
      <Icon />
    </button>
  );
}
export default Button;
