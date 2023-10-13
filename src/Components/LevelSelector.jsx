import React from "react";

const LevelSelector = ({ selectedLevel, setSelectedLevel }) => {
  return (
    <div className="col-4">
      <select
        className="form-control"
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
      >
        <option value="easy">Mudah</option>
        <option value="medium">Sedang</option>
        <option value="hard">Sulit</option>
      </select>
    </div>
  );
};

export default LevelSelector;
