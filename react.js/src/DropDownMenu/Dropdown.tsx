import React, { ChangeEvent } from "react";

interface DropdownProps {
  options: string[]; // Ensure options are an array of strings
}

function Dropdown({ options }: DropdownProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log(value); // Log the selected value
  };

  return (
    <>
      <select name="dropdown" id="dropdown" onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
