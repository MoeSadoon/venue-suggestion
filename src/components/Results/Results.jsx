import React from "react";
import "./Results.scss";

export default ({ recommendations, notRecommended }) =>
  recommendations.length ? (
    <div className="results-container">
      <div className="results-container--recommended">
        <h3>Recommendations:</h3>
        {recommendations.map(({ name }, idx) => (
          <h5 key={idx}>{name}</h5>
        ))}
      </div>
      <div className="results-container--not-recommended">
        <h3>We suggest you avoid:</h3>
        {notRecommended.map(({ name, reasons }, idx) => (
          <div className="results-container--not-recommended--item" key={idx}>
            <h5>{name}</h5>
            <ul>
              {reasons.map(reason => (
                <li key={idx}>{reason}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h2>Sorry, nothing was found, please try again.</h2>
  );
