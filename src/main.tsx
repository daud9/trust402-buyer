import React from "react";
import ReactDOM from "react-dom/client";
import {
  WalletProvider,
  walletManager,
  useWallet,
} from "./wallet";

function App() {
  const {
    wallets,
    activeAddress,
  } = useWallet();

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
            Connected:
            <br />
            {activeAddress}
          </p>

          <button onClick={disconnectPera}>
            Disconnect
          </button>
        </div>
      ) : (
        <p>Wallet not connected.</p>
      )}
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