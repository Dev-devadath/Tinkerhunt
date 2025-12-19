import React from "react";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={() => navigate("/t1nk")}
        style={{
          fontFamily: "Courier New",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#000",
          backgroundColor: "white",
          border: "none",
          cursor: "pointer",
          padding: "10px 20px",
        }}
      >
        start :)
      </button>
    </div>
  );
}

export default Start;
