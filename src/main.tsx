import React from "react";
import ReactDOM from "react-dom/client";
import {
  WalletProvider,
  walletManager,
  useWallet,
} from "./wallet";
import { TrustButton } from "./payment";

function App() {
  const {
    wallets,
    activeAddress,
    isReady,
  } = useWallet();

  if (!isReady) {
    return (
      <p style={{ padding: "30px" }}>
        Loading wallet...
      </p>
    );
  }

  const connectPera = async () => {
    const pera = wallets.find(
      (wallet) => wallet.id === "pera"
    );

    if (!pera) {
      alert("Pera Wallet not available");
      return;
    }

    try {
      await pera.connect();
    } catch (error) {
      console.error(error);
      alert("Pera connection was cancelled or failed.");
    }
  };

  const disconnectPera = () => {
    const pera = wallets.find(
      (wallet) => wallet.id === "pera"
    );

    if (pera) {
      pera.disconnect();
    }
  };

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

      <h2>Wallet Connection</h2>

      {activeAddress ? (
        <div>
          <p>
            <strong>Connected:</strong>
            <br />
            {activeAddress}
          </p>

          <button onClick={disconnectPera}>
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connectPera}
          style={{
            padding: "14px 20px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Connect Pera Wallet
        </button>
      )}

      <TrustButton />
    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <WalletProvider manager={walletManager}>
      <App />
    </WalletProvider>
  </React.StrictMode>
);