import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { DefaultPublic } from "../../../Context/Default";

let DefaultWallet = DefaultPublic.wallet;

async function FillWallet(deviceType) {
  // web3
  let web3Provider = null;
  if (deviceType === "mobile") {
    web3Provider = new WalletConnectProvider({
      rpc: {
        1: "https://mainnet.mycustomnode.com",
        3: "https://ropsten.mycustomnode.com",
        4: "https://rinkeby.mycustomnode.com",
        42: "https://kovan.mycustomnode.com",
      },
    });
    await web3Provider.enable();
  } else if (window.ethereum) {
    web3Provider = window.ethereum;
  } else if (window.web3) {
    web3Provider = window.web3.currentProvider;
  } else {
    web3Provider = new Web3.providers.HttpProvider(
      process.env.REACT_APP_LOCAL_BLOCKCHAIN
    );
  }

  const _wallet = JSON.parse(JSON.stringify(DefaultWallet));
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
    let _wallet = await FillWallet(deviceType).catch((err) => {
      console.log(err);
      return {
        wallet: DefaultWallet,
        alert: {
          open: true,
          message: "Error enquired.",
          severity: "error",
        },
      };
    });

    return {
      wallet: _wallet,
      alert: {
        open: true,
        message: "Login Wallet Success.",
        severity: "success",
      },
    };
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
