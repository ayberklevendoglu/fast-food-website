import React from "react";

const Input = (props) => {
  const { type, errorMessage, touched, placeholder, ...inputProps } = props;
  return (
    <div className="w-full">
      <label className="relative block cursor-text">
        <input
          type={type}
          className={`h-14 w-full border rounded-md ${
            touched && errorMessage ? "border-red-500" : "border-primary"
          } outline-none px-4 peer ${type !== "datetime-local" && "pt-2"}`}
          required
          {...inputProps}
        />
        {type !== "datetime-local" && (
          <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
            {placeholder}
          </span>
        )}
      </label>
      {touched && errorMessage && (
        <span className="text-red-500 text-xs">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
