const express = require("express");
var router = express.Router();
router.use(express.json());

const EmailController = require(`../../controllers/Auth/EmailController`);
const MobileController = require(`../../controllers/Auth/MobileController`);
const LoginController = require(`../../controllers/Auth/LoginController`);

router.get("/", (req, res) => {
  res.send(
    `[
      /sendMobile, 
      /sendMobileCode, 
      /sendMail, 
      /sendMailCode, 
      /login
    ]`
  );
});

router.post(`/sendMobile`, MobileController.SendMobile);
router.post(`/sendMobileCode`, MobileController.SendMobileCode);
router.post(`/sendMail`, EmailController.SendMail);
router.post(`/sendMailCode`, EmailController.SendMailCode);
router.post(`/login`, LoginController.Login);

module.exports = router;
