import {
  WalletProvider,
  useWallet,
} from "@txnlab/use-wallet-react";

const walletConfig = {
  wallets: [
    {
      id: "pera",
    },
  ],
};

export function WalletButton() {
  const {
    activeAccount,
    providers,
  } = useWallet();

  const connectPera = async () => {
    const pera = providers?.find(
      (provider) => provider.metadata.id === "pera"
    );

    if (pera) {
      await pera.connect();
    }
  };

  if (activeAccount) {
    return (
      <div>
        <p>
          Connected: {activeAccount.address.slice(0, 8)}...
        </p>
      </div>
    );
  }

  return (
    <button onClick={connectPera}>
      Connect Pera Wallet
    </button>
  );
}

export { WalletProvider };

export { walletConfig };