import React from 'react';

const Input = ({label, ...props}) => {
  return (
    <div className="my-5">
      <span className="uppercase text-sm text-gray-600 font-bold">{label}</span>
      <input
        className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        {...props}
        // type={props.type || "text"}
        // name={props.name}
        // required={props.required}
        // disabled={props.disabled}
      />
    </div>
  );
};

export default Input;