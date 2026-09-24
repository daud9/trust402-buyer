import React from "react";
import ReactDOM from "react-dom/client";
import {
  WalletProvider,
  walletManager,
  useWallet,
} from "./wallet";

function WalletTest() {
  const { activeAddress } = useWallet();

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Wallet Hook Test</h2>

      <p>
        Status:{" "}
        {activeAddress
          ? "Connected"
          : "Not connected"}
      </p>

      <p>
        Address:{" "}
        {activeAddress || "None"}
      </p>
    </div>
  );
}

function App() {
  return (
    <WalletProvider manager={walletManager}>
      <div
        style={{
          padding: "30px",
          fontFamily: "Arial",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h1>Trust402 Buyer</h1>

        <WalletTest />
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