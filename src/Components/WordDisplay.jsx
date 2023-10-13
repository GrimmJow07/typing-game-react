import React from "react";

const WordDisplay = ({ keyKata }) => {
  return (
    <div className="col-md-6 mx-auto">
      <h2 className="display-1 mb-5 " style={{ fontFamily: "sans-serif" }}>
        {keyKata}
      </h2>
    </div>
  );
};

export default WordDisplay;
