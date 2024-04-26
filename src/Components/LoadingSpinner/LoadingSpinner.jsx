import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
      <Spinner animation="border" role="status" variant="primary" style={{ width: "3rem", height: "3rem" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <span className="ms-2">{message}</span>
    </div>
  );
};

export default LoadingSpinner;

