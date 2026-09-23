import React from "react";
import ReactDOM from "react-dom/client";
import {
  WalletProvider,
  walletConfig,
  WalletButton,
} from "./wallet";
import { TrustButton } from "./payment";

function App() {
  return (
    <WalletProvider value={walletConfig}>
      <div
        style={{
          padding: "30px",
          fontFamily: "Arial",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <h1>Trust402 Buyer</h1>
        <p>Agent payment client</p>

        <WalletButton />
        <TrustButton />
      </div>
    </WalletProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);