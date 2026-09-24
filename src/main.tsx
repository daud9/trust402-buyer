import React from "react";
import ReactDOM from "react-dom/client";
import { walletManager } from "./wallet";

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
      <p>Wallet module loaded successfully.</p>
      <p>Wallet manager: {walletManager ? "OK" : "ERROR"}</p>
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
