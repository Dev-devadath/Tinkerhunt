import React from "react";

function NoCheat() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Courier New",
        color: "#000",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "40px",
            color: "#ff0000",
          }}
        >
          Do not try to skip !
        </h1>
        <p
          style={{
            fontSize: "24px",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          You are seeing this screen because we have detected that you are trying to cheat
        </p>
        <p
          style={{
            fontSize: "24px",
            marginBottom: "30px",
            fontWeight: "bold",
          }}
        >
          Please follow fair game
        </p>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
          }}
        >
          If you think this was a mistake contact affan or devadsth
        </p>
      </div>
    </div>
  );
}

export default NoCheat;
