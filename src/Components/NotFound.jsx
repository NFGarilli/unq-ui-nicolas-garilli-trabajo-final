import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  return (
    <div className="center">
      <h1> Page not found </h1>
      <div className="PageNotFound-center">
        <button className="btn" onClick={goToHome}>
          {" "}
          Home{" "}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
