import { WalletManager } from "@txnlab/use-wallet";
import { pera } from "@txnlab/use-wallet-pera";
import {
  WalletProvider,
  useWallet,
} from "@txnlab/use-wallet-react";

export const walletManager = new WalletManager({
  wallets: [pera()],
  defaultNetwork: "testnet",
});

export function WalletButton() {
  const {
    activeAddress,
    isReady,
    wallets,
  } = useWallet();

  if (!isReady) {
    return <p>Loading wallet...</p>;
  }

  if (activeAddress) {
    return (
      <p>
        Connected: {activeAddress.slice(0, 8)}...
      </p>
    );
  }

  const connectPera = async () => {
    const peraWallet = wallets.find(
      (wallet) => wallet.id === "pera"
    );

    if (peraWallet) {
      await peraWallet.connect();
    }
  };

  return (
    <button onClick={connectPera}>
      Connect Pera Wallet
    </button>
  );
}

export { WalletProvider };