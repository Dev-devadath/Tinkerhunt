import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function CodeProtectedPage({ children, requiredCode }) {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(true);
  
  // Get the current page code (URL path without leading slash)
  const currentPageCode = location.pathname.replace(/^\//, "");

  useEffect(() => {
    // If no requiredCode is provided, allow access (for first page)
    if (!requiredCode) {
      setIsAuthenticated(true);
      setIsChecking(false);
      return;
    }

    // Check if user has already entered the correct code for this page
    const authenticatedPages = JSON.parse(
      sessionStorage.getItem("authenticatedPages") || "[]"
    );
    
    if (authenticatedPages.includes(currentPageCode)) {
      setIsAuthenticated(true);
    }
    
    setIsChecking(false);
  }, [currentPageCode, requiredCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Check if the entered code matches the required code (from previous page)
    if (code.trim() === requiredCode) {
      // Store authentication in sessionStorage
      const authenticatedPages = JSON.parse(
        sessionStorage.getItem("authenticatedPages") || "[]"
      );
      
      if (!authenticatedPages.includes(currentPageCode)) {
        authenticatedPages.push(currentPageCode);
        sessionStorage.setItem("authenticatedPages", JSON.stringify(authenticatedPages));
      }
      
      setIsAuthenticated(true);
    } else {
      setError("Incorrect code! Please try again.");
      setCode("");
    }
  };

  // Show loading state while checking authentication
  if (isChecking) {
    return (
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: "18px" }}>Loading...</div>
      </div>
    );
  }

  // Show code entry form if not authenticated and requiredCode is provided
  if (!isAuthenticated && requiredCode) {
    return (
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "20px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Enter Code to Access
          </h1>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "30px",
              color: "#666",
              fontStyle: "italic",
            }}
          >
            Enter the code from the previous page
          </p>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError("");
              }}
              placeholder="Enter code..."
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "18px",
                border: "2px solid #333",
                borderRadius: "4px",
                fontFamily: "monospace",
                textAlign: "center",
                marginBottom: "15px",
                boxSizing: "border-box",
              }}
              autoFocus
            />
            {error && (
              <div
                style={{
                  color: "red",
                  marginBottom: "15px",
                  fontSize: "14px",
                }}
              >
                {error}
              </div>
            )}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "18px",
                backgroundColor: "#333",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#555";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#333";
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Show page content with current page code at the bottom
  return (
    <div style={{ position: "relative", minHeight: "100vh", paddingBottom: "100px" }}>
      {children}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "15px 25px",
          borderRadius: "8px",
          fontFamily: "monospace",
          fontSize: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          zIndex: 10,
          animation: "fadeIn 0.5s ease-in",
          textAlign: "center",
          maxWidth: "90%",
          boxSizing: "border-box",
          pointerEvents: "none",
        }}
      >
        <div style={{ fontSize: "12px", marginBottom: "5px", opacity: 0.8 }}>
          Page Code:
        </div>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          {currentPageCode}
        </div>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default CodeProtectedPage;

