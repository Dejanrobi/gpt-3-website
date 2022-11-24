import React from "react";
import "./featureRow.css";

const featureRow = ({ title, text }) => {
  return (
    <div className="gpt3__features-Row-container__feature">
      <div className="gpt3__features-Row-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>

      <div className="gpt3__features-Row-container_feature-text">{text}</div>
    </div>
  );
};

export default featureRow;
