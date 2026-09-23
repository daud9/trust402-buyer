import { useState, useCallback } from "react";
import { useWallet } from "@txnlab/use-wallet-react";
import { x402Client } from "@x402/core/client";
import { ExactAvmScheme } from "@x402/avm/exact/client";
import type { ClientAvmSigner } from "@x402/avm";

const TRUST402_URL =
  "https://trust402.daud9.deno.net/v1/trust";

export function TrustButton() {
  const { activeAccount, signTransactions } = useWallet();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState("");

  const checkTrust = useCallback(async () => {
    if (!activeAccount) {
      setError("Connect Pera Wallet first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const signer: ClientAvmSigner = {
        address: activeAccount.address,
        signTransactions: async (txns, indexes) =>
          signTransactions(txns, indexes),
      };

      const client = new x402Client({
        schemes: [],
      });

      client.register(
  "algorand:*",
  new ExactAvmScheme(signer)
);

      const response = await client.fetch(TRUST402_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          target: "TEST-AGENT",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            `Request failed: ${response.status}`
        );
      }

      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Payment failed"
      );
    } finally {
      setLoading(false);
    }
  }, [activeAccount, signTransactions]);

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={checkTrust}
        disabled={loading || !activeAccount}
        style={{
          padding: "12px 18px",
          fontSize: "16px",
          cursor:
            loading || !activeAccount
              ? "not-allowed"
              : "pointer",
        }}
      >
        {loading
          ? "Paying..."
          : "Get Trust Report — $0.05"}
      </button>

      {!activeAccount && (
        <p style={{ marginTop: "10px" }}>
          Connect Pera Wallet first.
        </p>
      )}

      {error && (
        <pre
          style={{
            marginTop: "20px",
            color: "red",
            whiteSpace: "pre-wrap",
          }}
        >
          {error}
        </pre>
      )}

      {result && (
        <pre
          style={{
            marginTop: "20px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}