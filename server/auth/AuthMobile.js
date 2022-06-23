var {
  SeveAuthCode,
  GetAuthCode,
} = require(`../database/${process.env.DATABASE.toLowerCase()}/auth`);

const SendAuthMobile = async (mobile) => {
  const _mobileNumber = mobile.replace(/[- )(]/g, "");

  let active_code = await SeveAuthCode(_mobileNumber);
  let _active_code = active_code
    .toString()
    .replace(/(\d{1})(\d{1})(\d{1})(\d{1})/, "$1-$2-$3-$4");
  console.log(_active_code);

  // Send SMS (_active_code) to (_mobileNumber)
  return { status: "success" };
};

const SendAuthMobileCode = async (mobile, receivedCode) => {
  const _mobileNumber = mobile.replace(/[- )(]/g, "");
  const _receivedCode = receivedCode.replace(/-/g, "");

  let _active_code = await GetAuthCode(_mobileNumber);

  return { status: _receivedCode == _active_code ? "success" : "error" };
};

module.exports = { SendAuthMobile, SendAuthMobileCode };
