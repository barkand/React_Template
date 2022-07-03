import { DefaultPublic } from "../../../../Context/Default";
import { PostApi } from "../../../../../Api/Api";

export async function SendUserName(username) {
  try {
    let _result = await PostApi(
      process.env.REACT_APP_AUTH_TYPE === "MOBILE" ? "sendMobile" : "sendMail",
      { username }
    );

    if (_result.status === 200 && _result.data.status === 200) {
      return { status: "success" };
    } else {
      return {
        status: "error",
        alert: {
          open: true,
          message: `${
            process.env.REACT_APP_AUTH_TYPE === "MOBILE"
              ? "Mobile number"
              : "Email"
          } is not valid`,
          severity: "error",
        },
      };
    }
  } catch (error) {
    return {
      status: "error",
      alert: {
        open: true,
        message: `${
          process.env.REACT_APP_AUTH_TYPE === "MOBILE"
            ? "Mobile number"
            : "Email"
        } is not valid`,
        severity: "error",
      },
    };
  }
}

export async function SendCode(username, receivedCode) {
  try {
    let _result = await PostApi(
      process.env.REACT_APP_AUTH_TYPE === "MOBILE"
        ? "sendMobileCode"
        : "sendMailCode",
      { username, receivedCode }
    );

    if (_result.status === 200 && _result.data.status === 200) {
      return { status: "success" };
    } else {
      return {
        status: "error",
        alert: {
          open: true,
          message: "Code number is not valid",
          severity: "error",
        },
      };
    }
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

export async function LoginAccount(username) {
  try {
    let _result = await PostApi("login", { username });
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
    auth: DefaultPublic.auth,
    alert: {
      open: true,
      message: "Logout Account Success.",
      severity: "warning",
    },
  };
}
