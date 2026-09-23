import {
  WalletProvider,
  WalletId,
  useWallet,
} from "@txnlab/use-wallet-react";

export const walletConfig = {
  wallets: [WalletId.PERA],
};

export function WalletButton() {
  const {
    activeAccount,
    connect,
    disconnect,
  } = useWallet();

  if (activeAccount) {
    return (
      <button onClick={disconnect}>
        Disconnect {activeAccount.address.slice(0, 8)}...
      </button>
    );
  }

  return (
    <button onClick={() => connect(WalletId.PERA)}>
      Connect Pera Wallet
    </button>
  );
}

export { WalletProvider };