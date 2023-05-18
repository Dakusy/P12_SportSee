import React from "react";
import PropTypes from "prop-types";

import bike from "../assets/bike.png";
import dumbbell from "../assets/dumbbell.png";
import yoga from "../assets/yoga.png";
import swim from "../assets/swim.png";
import fire from "../assets/calories-icon.png"
import chicken from "../assets/protein-icon.png"
import apple from "../assets/carbs-icon.png"
import burger from "../assets/fat-icon.png"

const icons = { bike, dumbbell, yoga, swim, fire, chicken, apple, burger, };

function GetIcon({ icon }) {
  return (
    <div className="get-icon">
      <img src={icons[icon]} alt="icon" />
    </div>
  );
}

/**
 * propTypes: Specify the type of data our component should expect: 
 */
GetIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default GetIcon;