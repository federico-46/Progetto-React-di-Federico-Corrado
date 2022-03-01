import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>Opss!! this page does not exist </h1>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
