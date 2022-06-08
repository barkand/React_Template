import Web3 from "web3";
import { Default } from "../../../Context/Public";

export const Utils = {
  toWei: (amount, unit) => {
    return Web3.utils.toWei(amount, unit);
  },
};

let DefaultWallet = Default.wallet;

async function FillWallet() {
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
  //library
  _wallet.library = new Web3(web3Provider);
  //
  let eth = _wallet.library.eth;
  _wallet.connected = true;

  //network
  _wallet.network = await eth.net.getNetworkType();
  //networkId
  _wallet.networkId = await eth.net.getId();
  //account
  await eth.getAccounts().then((result) => (_wallet.account = result[0]));
  //chainId
  await eth.getChainId().then((result) => (_wallet.chainId = result));
  //balance: eth, wei
  await eth
    .getBalance(_wallet.account)
    .then((result) => (_wallet.balance.wei = result));
  let ethBalance = Web3.utils.fromWei(_wallet.balance.wei, "ether");
  _wallet.balance.eth = parseFloat(ethBalance).toFixed(4);
  //

  return _wallet;
}

export async function LoginWallet() {
  let _wallet;
  _wallet = await window.ethereum
    .request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    })
    .then((permissions) => {
      const accountsPermission = permissions.find(
        (permission) => permission.parentCapability === "eth_accounts"
      );

      if (accountsPermission) {
        return FillWallet().then((result) => result);
      }
    })
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        alert("Permissions needed to continue.");
      } else {
        console.error(error);
      }
    });

  return _wallet || DefaultWallet;
}

export async function LogoutWallet() {
  return DefaultWallet;
}
