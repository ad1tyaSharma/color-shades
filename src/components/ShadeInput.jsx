import React from "react";

const ShadeInput = (props) => {
  return (
    <div>
      <input
        type="text"
        className="src"
        placeholder="Enter a Color"
        value={props.color}
        onChange={(e) => props.onInputChange(e.target.value)}
      />
    </div>
  );
};
export default ShadeInput;
