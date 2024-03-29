// Custom Config
process.env.API_TYPE = "REST";
const API_PATH = "/api/rest/v1";

let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();
let server = require("../../../../server");

chai.use(chaiHttp);

describe("========== REST ==========", () => {
  // Check Mobile Apis
  describe("===== Mobile =====", () => {
    describe("/sendMobile", () => {
      it("it should POST a Mobile number", (done) => {
        let data = {
          username: "1234",
        };

        chai
          .request(server)
          .post(API_PATH + "/sendMobile")
          .send(data)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have
              .property("message")
              .eql("mobile success sended");
            done();
          });
      });
    });

    describe("/sendMobileCode --Invalid Code", () => {
      it("it should POST a received code and get error", (done) => {
        let data = {
          username: "1234",
          receivedCode: "1-2-3-4",
        };

        chai
          .request(server)
          .post(API_PATH + "/sendMobileCode")
          .send(data)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("message").eql("code is wrong");
            done();
          });
      });
    });

    describe("/sendMobileCode --Empty Code", () => {
      it("it should POST a empty code and get error", (done) => {
        let data = {
          username: "1234",
          receivedCode: "",
        };

        chai
          .request(server)
          .post(API_PATH + "/sendMobileCode")
          .send(data)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("message").eql("code is wrong");
            done();
          });
      });
    });
  });

  // Check Mail Apis
  describe("===== Mail =====", () => {
    describe("/sendMail", () => {
      it("it should POST a Mail number", (done) => {
        let data = {
          username: "a@a.a",
        };

        chai
          .request(server)
          .post(API_PATH + "/sendMail")
          .send(data)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have
              .property("message")
              .eql("email success sended");
            done();
          });
      });
    });

    describe("/sendMailCode --Invalid Code", () => {
      it("it should POST a received code and get error", (done) => {
        let data = {
          username: "a@a.a",
          receivedCode: "1-2-3-4",
        };

        chai
          .request(server)
          .post(API_PATH + "/sendMailCode")
          .send(data)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("message").eql("code is wrong");
            done();
          });
      });
    });

    describe("/sendMailCode --Empty Code", () => {
      it("it should POST a empty code and get error", (done) => {
        let data = {
          username: "a@a.a",
          receivedCode: "",
        };

        chai
          .request(server)
          .post(API_PATH + "/sendMailCode")
          .send(data)
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("message").eql("code is wrong");
            done();
          });
      });
    });
  });
});
