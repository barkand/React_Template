const express = require("express");
var router = express.Router();
router.use(express.json());

const AuthController = require("./controllers/AuthController");

let Api_Version = process.env.API_VERSION.toLowerCase();

router.get("/", (req, res) => {
  res.send(
    `[/${Api_Version}/sendMobile, /${Api_Version}/sendCode, /${Api_Version}/login]`
  );
});

router.post(`/${Api_Version}/sendMobile`, AuthController.SendMobile);
router.post(`/${Api_Version}/sendCode`, AuthController.SendCode);
router.post(`/${Api_Version}/login`, AuthController.Login);

module.exports = router;
