var express = require("express");
var router = express.Router();

router.use(express.json());

router.get("/", function (req, res) {
  res.send("[/SendMobile, /SendCode, /login]");
});

router.post("/SendMobile", function (req, res) {
  let phoneNumber = req.body.phoneNumber;
  res.send({ status: "success" });
});

router.post("/SendCode", function (req, res) {
  let phoneNumber = req.body.phoneNumber;
  let receivedCode = req.body.receivedCode;
  res.send({ status: receivedCode === "1234" ? "success" : "error" });
});

router.post("/login", function (req, res) {
  let phoneNumber = req.body.phoneNumber;
  res.send({
    connected: true,
    user: phoneNumber,
    token: "12345-abcde-67890-abcde",
    refreshToken: "12345-abcde-67890-abcde",
  });
});

module.exports = router;
