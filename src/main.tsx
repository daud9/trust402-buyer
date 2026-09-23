import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>Trust402 Buyer</h1>
      <p>Frontend test is working.</p>
      <button
        style={{
          padding: "12px 18px",
          fontSize: "16px",
        }}
      >
        Test Button
      </button>
    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);