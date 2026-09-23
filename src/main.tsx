import React from "react";
import ReactDOM from "react-dom/client";
import {
  WalletProvider,
  walletManager,
  WalletButton,
} from "./wallet";

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
        <p>Wallet connection test</p>

        <WalletButton />
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