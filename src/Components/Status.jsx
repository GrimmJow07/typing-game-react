import React from "react";

const Status = ({ keterangan, onResetClick }) => {
  return (
    <div className="row mt-5" style={{ cursor: "pointer" }}>
      <div className="col-md-12">
        <div
          className="card card-body text-white"
          style={{ backgroundColor: "#77acf1" }}
          onClick={onResetClick}
        >
          <h5>Reset</h5>
          <p>Mereset Hasil Score Tertinggi</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
