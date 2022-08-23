import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating, reviews }) => {
  return (
    <span style={{ fontSize: "0.75rem" }}>
      {[...new Array(rating)].map((a, i) => (
        <FontAwesomeIcon color="gold"key={i} icon={faStar} />
      ))}
      {[...new Array(5 - rating)].map((a, i) => (
        <FontAwesomeIcon key={i} icon={faStar} color="#505050"/>
      ))}{" "}
      {rating}.0 ({reviews})
    </span>
  );
};

export default Rating;
