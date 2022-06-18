import { Default } from "../../../Context/Public";

let DefaultAcoount = Default.auth;

export async function LoginAccount(username, password) {
  return {
    auth: {
      connected: true,
      user: username,
      token: "123",
    },
    alert: {
      open: true,
      message: "Login Account Success.",
      severity: "success",
    },
  };
}

export async function LogoutAccount() {
  return {
    auth: DefaultAcoount,
    alert: {
      open: true,
      message: "Logout Account Success.",
      severity: "success",
    },
  };
}
