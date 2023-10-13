import React from "react";

const InputBox = ({ input, setInput, onKeyPress }) => {
  return (
    <input
      type="text"
      className="form-control form-control-lg"
      placeholder="Mulai Mengetik..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={onKeyPress}
    />
  );
};

export default InputBox;
