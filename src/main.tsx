import React from "react";
import ReactDOM from "react-dom/client";
import {
  WalletProvider,
  walletManager,
  useWallet,
} from "./wallet";

function WalletTest() {
  const {
    wallets,
    activeAddress,
    isReady,
  } = useWallet();

  if (!isReady) {
    return <p>Loading wallet...</p>;
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

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Wallet Connection</h2>

      {activeAddress ? (
        <div>
          <p>
            Connected:
            <br />
            {activeAddress}
          </p>

          <button
            onClick={() => {
              const pera = wallets.find(
                (wallet) => wallet.id === "pera"
              );

              if (pera) {
                pera.disconnect();
              }
            }}
          >
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