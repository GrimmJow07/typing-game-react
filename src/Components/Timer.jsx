import React from "react";

const Timer = ({ timeS }) => {
  return (
    <div className="col-4">
      <h3>
        <span>Waktu : {timeS} </span>
      </h3>
    </div>
  );
};

export default Timer;
