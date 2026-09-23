import { useState } from "react";

const TRUST402_URL =
  "https://trust402.daud9.deno.net/v1/trust";

export function TrustButton() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState("");

  async function checkTrust() {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(TRUST402_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          target: "TEST-AGENT",
        }),
      });

      const data = await response.json();

      if (response.status === 402) {
        setResult({
          status: 402,
          message: "Payment required",
          paymentRequired: response.headers.get("payment-required"),
          data,
        });
        return;
      }

      if (!response.ok) {
        throw new Error(
          data?.message || `Request failed: ${response.status}`
        );
      }

      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unknown error"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={checkTrust}
        disabled={loading}
        style={{
          padding: "12px 18px",
          fontSize: "16px",
          cursor: loading ? "wait" : "pointer",
        }}
      >
        {loading ? "Checking..." : "Check Trust402"}
      </button>

      {error && (
        <pre style={{ marginTop: "20px", color: "red" }}>
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