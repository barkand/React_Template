const express = require("express");

var {
  SaveUser,
} = require(`../../../database/${process.env.DATABASE.toLowerCase()}/auth`);

var router = express.Router();
router.use(express.json());

let Api_Version = process.env.API_VERSION.toLowerCase();

router.get("/", (req, res) => {
  res.send(
    `[/${Api_Version}/SendMobile, /${Api_Version}/SendCode, /${Api_Version}/login]`
  );
});

//
router.post(`/${Api_Version}/SendMobile`, (req, res) => {
  let phoneNumber = req.body.phoneNumber;
  res.send({ status: "success" });
});

router.post(`/${Api_Version}/SendCode`, (req, res) => {
  let phoneNumber = req.body.phoneNumber;
  let receivedCode = req.body.receivedCode;
  res.send({ status: receivedCode === "1234" ? "success" : "error" });
});

router.post(`/${Api_Version}/login`, (req, res) => {
  let phoneNumber = req.body.phoneNumber;
  SaveUser(phoneNumber);
  res.send({
    connected: true,
    user: phoneNumber,
    token: "12345-abcde-67890-abcde",
    refreshToken: "12345-abcde-67890-abcde",
  });
});

module.exports = router;
