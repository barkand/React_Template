const express = require("express");
var router = express.Router();
router.use(express.json());

const EmailController = require(`./controllers/Auth/EmailController`);
const MobileController = require(`./controllers/Auth/MobileController`);
const LoginController = require(`./controllers/Auth/LoginController`);

let Api_Version = process.env.API_VERSION.toLowerCase();

router.get("/", (req, res) => {
  res.send(
    `[
      /${Api_Version}/sendMobile, 
      /${Api_Version}/sendMobileCode, 
      /${Api_Version}/sendMail, 
      /${Api_Version}/sendMailCode, 
      /${Api_Version}/login
    ]`
  );
});

router.post(`/${Api_Version}/sendMobile`, MobileController.SendMobile);
router.post(`/${Api_Version}/sendMobileCode`, MobileController.SendMobileCode);
router.post(`/${Api_Version}/sendMail`, EmailController.SendMail);
router.post(`/${Api_Version}/sendMailCode`, EmailController.SendMailCode);
router.post(`/${Api_Version}/login`, LoginController.Login);

module.exports = router;
