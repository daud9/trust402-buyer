import { useWallet } from "@txnlab/use-wallet-react";

export function TrustButton() {
  const { activeAddress } = useWallet();

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Trust402 Test</h2>

      <p>
        Wallet:
        <br />
        {activeAddress || "Not connected"}
      </p>

      <button
        style={{
          padding: "12px 18px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Get Trust Report — $0.05
      </button>
    </div>
  );
}