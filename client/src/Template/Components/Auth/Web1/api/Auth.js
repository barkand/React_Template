import { Default } from "../../../../Context/Public";
import { PostRestApi } from "./Rest";

export async function SendPhone(phoneNumber) {
  try {
    await PostRestApi("sendMobile", { phoneNumber });
    return { status: "success" };
  } catch (error) {
    return {
      status: "error",
      alert: {
        open: true,
        message: "Phone number is not valid",
        severity: "error",
      },
    };
  }
}

export async function SendCode(phoneNumber, receivedCode) {
  try {
    await PostRestApi("sendCode", { phoneNumber, receivedCode });
    return { status: "success" };
  } catch (error) {
    return {
      status: "error",
      alert: {
        open: true,
        message: "Code number is not valid",
        severity: "error",
      },
    };
  }
}

export async function LoginAccount(phoneNumber) {
  try {
    let _result = await PostRestApi("login", { phoneNumber });
    return {
      auth: _result.data,
      alert: {
        open: true,
        message: "Login Account Success.",
        severity: "success",
      },
    };
  } catch (error) {}
}

export async function LogoutAccount() {
  return {
    auth: Default.auth,
    alert: {
      open: true,
      message: "Logout Account Success.",
      severity: "warning",
    },
  };
}
