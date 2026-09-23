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
      <p>Frontend is running successfully.</p>
      <p>Next: wallet connection.</p>
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