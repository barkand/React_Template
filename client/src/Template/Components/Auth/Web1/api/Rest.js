import { Default } from "../../../../Context/Public";

let DefaultAccount = Default.auth;

export async function SendPhone(phoneNumber) {
  let _result = await fetch(`${process.env.REACT_APP_SERVER}/SendMobile`, {
    method: "POST",
    body: JSON.stringify({ phoneNumber }),
  }).then((res) => res.json());

  if (_result.status === "success") {
    return {
      status: "success",
    };
  } else {
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
  let _result = await fetch(`${process.env.REACT_APP_SERVER}/SendCode`, {
    method: "POST",
    body: JSON.stringify({ phoneNumber, receivedCode }),
  }).then((res) => res.json());

  if (_result.status === "success") {
    return {
      status: "success",
    };
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
}

export async function LoginAccount(phoneNumber) {
  let _result = await fetch(`${process.env.REACT_APP_SERVER}/login`, {
    method: "POST",
    body: JSON.stringify({ phoneNumber }),
  }).then((res) => res.json());

  return {
    auth: _result,
    alert: {
      open: true,
      message: "Login Account Success.",
      severity: "success",
    },
  };
}

export async function LogoutAccount() {
  return {
    auth: DefaultAccount,
    alert: {
      open: true,
      message: "Logout Account Success.",
      severity: "warning",
    },
  };
}
