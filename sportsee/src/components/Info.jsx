import React from "react";
import GetIcon from "../components/GetIcon"
import "../css/Info.css"

function Info({ keyData }) {
  return (
    <div className="summary-container">
      <div className="summary-icon-container">
        <div className="tag">
          <GetIcon icon="fire" />
          <div className="tag-text">
            <span>{keyData?.calorieCount}kCal </span>
            <span className="small">Calories</span>
          </div>
        </div>

        <div className="tag">
          <GetIcon icon="chicken" />
          <div className="tag-text">
            <span>{keyData?.proteinCount}g </span>
            <span className="small">Poteines</span>
          </div>
        </div>
        <div className="tag">
          <GetIcon icon="apple" />
          <div className="tag-text">
            <span>{keyData?.carbohydrateCount}g </span>
            <span className="small">Glucides</span>
          </div>
        </div>
        <div className="tag">
          <GetIcon icon="burger" />
          <div className="tag-text">
            <span>{keyData?.lipidCount}g </span>
            <span className="small">Lipides</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;