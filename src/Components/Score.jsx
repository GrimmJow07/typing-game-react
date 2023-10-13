import React from "react";

const Score = ({ score, highestScore }) => {
  return (
    <>
    <div className="col-4">
      <h3>
        <span>Score : {score} </span>
      </h3>
    </div>
    <div className="col-4">
      <h3>
        <span>Score : {highestScore} </span>
      </h3>
    </div>
    </>
  );
};

export default Score;
