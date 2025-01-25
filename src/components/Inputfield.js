import React from 'react';
import '../assets/styles/Inputfield.css';

function Inputfield({ value, onChange, onKeyPress, className, placeholder }) {
  return (
    <div className="relative md:w-auto w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className={`input-field ${className}`}
        placeholder={placeholder}
      />
      <button className="absolute right-[6px] top-[6px] bg-buttonBackgroundColor h-10 w-10 rounded-[6px]"></button>
    </div>
  );
}

export default Inputfield;