import React from "react";
import ReactDOM from "react-dom/client";
import {
  WalletProvider,
  walletManager,
} from "./wallet";

function App() {
  return (
    <WalletProvider manager={walletManager}>
      <div
        style={{
          padding: "30px",
          fontFamily: "Arial",
        }}
      >
        <h1>Trust402 Buyer</h1>
        <p>Wallet Provider is working.</p>
      </div>
    </WalletProvider>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);