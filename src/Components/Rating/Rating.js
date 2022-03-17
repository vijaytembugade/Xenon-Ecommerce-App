import React from "react";
import "./Rating.css";

function Rating({ value }) {
  return (
    <div>
      {value > 1 ? (
        <span className="material-icons md-24 rated"> star_rate </span>
      ) : value >= 0.5 ? (
        <span className="material-icons md-24 rated"> star_half </span>
      ) : (
        <span className="material-icons md-24 not-rated"> star_outline </span>
      )}
      {value > 2 ? (
        <span className="material-icons md-24 rated"> star_rate </span>
      ) : value >= 1.5 ? (
        <span className="material-icons md-24 rated"> star_half </span>
      ) : (
        <span className="material-icons md-24 not-rated"> star_outline </span>
      )}
      {value > 3 ? (
        <span className="material-icons md-24 rated"> star_rate </span>
      ) : value >= 2.5 ? (
        <span className="material-icons md-24 rated"> star_half </span>
      ) : (
        <span className="material-icons md-24 not-rated"> star_outline </span>
      )}
      {value > 4 ? (
        <span className="material-icons md-24 rated"> star_rate </span>
      ) : value >= 3.5 ? (
        <span className="material-icons md-24 rated"> star_half </span>
      ) : (
        <span className="material-icons md-24 not-rated"> star_outline </span>
      )}
      {value > 5 ? (
        <span className="material-icons md-24 rated"> star_rate </span>
      ) : value >= 4.5 ? (
        <span className="material-icons md-24 rated"> star_half </span>
      ) : (
        <span className="material-icons md-24 not-rated"> star_outline </span>
      )}
    </div>
  );
}

export default Rating;
