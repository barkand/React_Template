import Web3 from "web3";
import { Default } from "../../../Context/Public";

let DefaultWallet = Default.wallet;

export async function FillWallet() {
  const _wallet = JSON.parse(JSON.stringify(DefaultWallet));
  let web3Provider = null;
  // web3
  if (window.ethereum) {
    web3Provider = window.ethereum;
  } else if (window.web3) {
    web3Provider = window.web3.currentProvider;
  } else {
    web3Provider = new Web3.providers.HttpProvider(
      process.env.REACT_APP_LOCAL_BLOCKCHAIN
    );
  }
  //library Web3
  _wallet.library = new Web3(web3Provider);
  //
  let eth = _wallet.library.eth;
  _wallet.connected = true;
  //network
  _wallet.networkId = await eth.net.getId();
  //account
  await eth.getAccounts().then((result) => (_wallet.account = result[0]));
  //chainId
  await eth.getChainId().then((result) => (_wallet.chainId = result));

  return _wallet;
}

export async function LoginWallet(deviceType) {
  if (deviceType === "mobile") {
    const metamaskAppDeepLink =
      "https://metamask.app.link/dapp/" + process.env.REACT_APP_DAPP_URL;
    window.location.href = metamaskAppDeepLink;
  }

  if (!window.ethereum) {
    return {
      wallet: DefaultWallet,
      alert: {
        open: true,
        message: "Please install MetaMask to continue.",
        severity: "warning",
      },
    };
  }

  let errorMsg;
  let _wallet = await window.ethereum
    .request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    })
    .then(async (permissions) => {
      const accountsPermission = permissions.find(
        (permission) => permission.parentCapability === "eth_accounts"
      );

      if (accountsPermission) {
        return await FillWallet();
      }
    })
    .catch((error) => {
      // EIP-1193 userRejectedRequest error
      errorMsg =
        error.code === 4001
          ? "Permissions needed to continue."
          : "Error enquired.";
    });

  if (errorMsg) {
    return {
      wallet: DefaultWallet,
      alert: {
        open: true,
        message: errorMsg,
        severity: "error",
      },
    };
  }

  return {
    wallet: _wallet,
    alert: {
      open: true,
      message: "Login Wallet Success.",
      severity: "success",
    },
  };
}

export async function LogoutWallet() {
  return {
    wallet: DefaultWallet,
    alert: {
      open: true,
      message: "Logout Wallet Success.",
      severity: "success",
    },
  };
}
