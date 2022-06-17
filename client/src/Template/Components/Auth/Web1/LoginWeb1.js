import { Default } from "../../../Context/Public";

let DefaultAcoount = Default.auth;

export async function LoginAccount() {
  return {
    auth: {
      connected: true,
      user: "admin",
      token: "123",
    },
    alert: {
      open: true,
      message: "Login Wallet Success.",
      severity: "success",
    },
  };
}

export async function LogoutAccount() {
  return {
    auth: DefaultAcoount,
    alert: {
      open: true,
      message: "Logout Wallet Success.",
      severity: "success",
    },
  };
}
